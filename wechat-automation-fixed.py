#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
💬 WeChat Automation MCP Server (Fixed Version)
通过模拟键盘鼠标控制微信发送消息
"""

import asyncio
import time
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.server.models import InitializationOptions
from mcp.types import Tool, TextContent

try:
    import pyautogui
    PYAUTOGUI_AVAILABLE = True
except ImportError:
    PYAUTOGUI_AVAILABLE = False
    print("⚠️ 未安装 pyautogui，请运行：pip install pyautogui")

# 配置
pyautogui.FAILSAFE = True  # 鼠标移到屏幕角落可中止
pyautogui.PAUSE = 0.5  # 操作间隔

server = Server("wechat-automation")

# 工具定义
@server.list_tools()
async def list_tools():
    return [
        Tool(
            name="wechat_send_message",
            description="通过微信发送消息（模拟键盘鼠标）",
            inputSchema={
                "type": "object",
                "properties": {
                    "contact": {"type": "string", "description": "联系人或群聊名称"},
                    "message": {"type": "string", "description": "要发送的消息内容"}
                },
                "required": ["contact", "message"]
            }
        ),
        Tool(
            name="wechat_open_chat",
            description="打开与指定联系人的聊天窗口",
            inputSchema={
                "type": "object",
                "properties": {
                    "contact": {"type": "string", "description": "联系人或群聊名称"}
                },
                "required": ["contact"]
            }
        ),
        Tool(
            name="wechat_search_contact",
            description="搜索联系人",
            inputSchema={
                "type": "object",
                "properties": {
                    "name": {"type": "string", "description": "联系人名称"}
                },
                "required": ["name"]
            }
        ),
        Tool(
            name="mouse_click",
            description="模拟鼠标点击",
            inputSchema={
                "type": "object",
                "properties": {
                    "x": {"type": "number", "description": "X 坐标"},
                    "y": {"type": "number", "description": "Y 坐标"},
                    "button": {"type": "string", "enum": ["left", "right", "middle"], "default": "left"}
                }
            }
        ),
        Tool(
            name="keyboard_type",
            description="模拟键盘输入",
            inputSchema={
                "type": "object",
                "properties": {
                    "text": {"type": "string", "description": "要输入的文本"},
                    "interval": {"type": "number", "default": 0.1, "description": "输入间隔（秒）"}
                },
                "required": ["text"]
            }
        ),
        Tool(
            name="keyboard_press",
            description="模拟按键",
            inputSchema={
                "type": "object",
                "properties": {
                    "key": {"type": "string", "description": "按键名称，如 enter, ctrl, alt 等"}
                },
                "required": ["key"]
            }
        ),
        Tool(
            name="get_screen_size",
            description="获取屏幕分辨率",
            inputSchema={
                "type": "object",
                "properties": {}
            }
        ),
        Tool(
            name="take_screenshot",
            description="截取屏幕",
            inputSchema={
                "type": "object",
                "properties": {
                    "output": {"type": "string", "description": "保存路径"}
                }
            }
        )
    ]

# 工具实现
@server.call_tool()
async def call_tool(name: str, arguments: dict):
    if not PYAUTOGUI_AVAILABLE:
        return [TextContent(type="text", text="❌ pyautogui 未安装，请运行：pip install pyautogui")]

    try:
        if name == "wechat_send_message":
            contact = arguments.get("contact")
            message = arguments.get("message")

            result = []

            # 1. 激活微信窗口
            result.append(f"📱 准备发送消息到：{contact}")

            # 2. 使用 Win 键打开搜索
            pyautogui.hotkey('win', 's')
            time.sleep(1)

            # 3. 输入微信
            pyautogui.write('微信', interval=0.1)
            time.sleep(1)
            pyautogui.press('enter')
            time.sleep(2)

            # 4. 搜索联系人
            pyautogui.hotkey('ctrl', 'f')
            time.sleep(0.5)
            pyautogui.write(contact, interval=0.1)
            time.sleep(1)
            pyautogui.press('enter')
            time.sleep(1)

            # 5. 输入消息
            pyautogui.write(message, interval=0.05)
            time.sleep(0.5)

            # 6. 发送
            pyautogui.press('enter')

            result.append(f"✅ 消息已发送：{message[:50]}...")

            return [TextContent(type="text", text="\n".join(result))]

        elif name == "wechat_open_chat":
            contact = arguments.get("contact")

            # 打开微信
            pyautogui.hotkey('win', 's')
            time.sleep(1)
            pyautogui.write('微信', interval=0.1)
            time.sleep(1)
            pyautogui.press('enter')
            time.sleep(2)

            # 搜索联系人
            pyautogui.hotkey('ctrl', 'f')
            time.sleep(0.5)
            pyautogui.write(contact, interval=0.1)
            time.sleep(1)
            pyautogui.press('enter')

            return [TextContent(type="text", text=f"✅ 已打开与 {contact} 的聊天窗口")]

        elif name == "wechat_search_contact":
            name_search = arguments.get("name")

            pyautogui.hotkey('ctrl', 'f')
            time.sleep(0.5)
            pyautogui.write(name_search, interval=0.1)

            return [TextContent(type="text", text=f"✅ 已搜索联系人：{name_search}")]

        elif name == "mouse_click":
            x = arguments.get("x")
            y = arguments.get("y")
            button = arguments.get("button", "left")

            if x and y:
                pyautogui.click(x, y, button=button)
                return [TextContent(type="text", text=f"✅ 鼠标点击：({x}, {y})")]
            else:
                pyautogui.click(button=button)
                return [TextContent(type="text", text=f"✅ 鼠标点击当前位置")]

        elif name == "keyboard_type":
            text = arguments.get("text")
            interval = arguments.get("interval", 0.1)

            pyautogui.write(text, interval=interval)
            return [TextContent(type="text", text=f"✅ 已输入：{text[:50]}...")]

        elif name == "keyboard_press":
            key = arguments.get("key")
            pyautogui.press(key)
            return [TextContent(type="text", text=f"✅ 已按按键：{key}")]

        elif name == "get_screen_size":
            size = pyautogui.size()
            return [TextContent(type="text", text=f"📺 屏幕分辨率：{size.width}x{size.height}")]

        elif name == "take_screenshot":
            output = arguments.get("output", f"C:\\Users\\6\\Pictures\\screenshot-{int(time.time())}.png")
            screenshot = pyautogui.screenshot()
            screenshot.save(output)
            return [TextContent(type="text", text=f"✅ 截图已保存：{output}")]

        else:
            return [TextContent(type="text", text=f"❌ 未知工具：{name}")]

    except Exception as e:
        return [TextContent(type="text", text=f"❌ 错误：{str(e)}")]

async def main():
    async with stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            InitializationOptions(
                server_name="wechat-automation",
                server_version="1.0.0",
                capabilities=server.get_capabilities()
            )
        )

if __name__ == "__main__":
    asyncio.run(main())
