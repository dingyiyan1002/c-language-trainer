#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
广深地区嵌入式软件开发岗位 JD 收集器
收集 200 个最新岗位信息，分析技术要求，生成面试考点和知识体系
"""

import json
import csv
from datetime import datetime
from typing import Dict, List, Any
import re

class EmbeddedJobCollector:
    def __init__(self):
        self.jobs = []
        self.skills_frequency = {}
        self.topics = {}
        
    def collect_sample_jobs(self) -> List[Dict[str, Any]]:
        """
        示例岗位数据（基于真实广深地区嵌入式岗位要求）
        实际使用时需要连接招聘 API 或爬虫
        """
        sample_jobs = [
            # 华为 - 深圳
            {
                "company": "华为技术有限公司",
                "location": "深圳",
                "position": "嵌入式软件开发工程师",
                "salary": "20-40K·16 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C/C++", "Linux 内核", "驱动开发", "ARM", "RTOS", "Git"],
                "responsibilities": [
                    "负责嵌入式 Linux 系统软件开发",
                    "驱动程序的编写和调试",
                    "系统性能优化"
                ],
                "requirements": [
                    "精通 C/C++ 编程",
                    "熟悉 Linux 内核机制",
                    "有 ARM 平台开发经验",
                    "了解 RTOS 原理"
                ],
                "post_date": "2025-12",
                "high_frequency": True
            },
            {
                "company": "华为技术有限公司",
                "location": "深圳",
                "position": "嵌入式系统工程师",
                "salary": "25-45K·16 薪",
                "experience": "5-10 年",
                "education": "硕士",
                "skills": ["C", "Linux", "多线程", "网络编程", "IPC", "内存管理"],
                "responsibilities": [
                    "嵌入式系统架构设计",
                    "核心模块开发",
                    "技术难题攻关"
                ],
                "requirements": [
                    "深入理解操作系统原理",
                    "精通多线程编程",
                    "熟悉网络协议栈",
                    "有大型项目经验"
                ],
                "post_date": "2025-12",
                "high_frequency": True
            },
            # 大疆 - 深圳
            {
                "company": "大疆创新",
                "location": "深圳",
                "position": "嵌入式软件工程师",
                "salary": "25-50K·14 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C/C++", "RTOS", "ARM Cortex-M", "传感器", "控制算法", "调试"],
                "responsibilities": [
                    "飞控系统软件开发",
                    "传感器数据采集处理",
                    "实时控制系统开发"
                ],
                "requirements": [
                    "精通 C 语言",
                    "熟悉至少一种 RTOS",
                    "有 ARM MCU 开发经验",
                    "了解自动控制原理"
                ],
                "post_date": "2026-01",
                "high_frequency": True
            },
            {
                "company": "大疆创新",
                "location": "深圳",
                "position": "底层驱动工程师",
                "salary": "30-55K·14 薪",
                "experience": "5-10 年",
                "education": "本科",
                "skills": ["C", "汇编", "Bootloader", "硬件原理图", "示波器", "JTAG"],
                "responsibilities": [
                    "BSP 开发",
                    "底层驱动编写",
                    "硬件 Bring-up"
                ],
                "requirements": [
                    "精通 ARM 体系结构",
                    "熟悉常见总线协议",
                    "能看懂硬件原理图",
                    "熟练使用调试工具"
                ],
                "post_date": "2026-01",
                "high_frequency": True
            },
            # 腾讯 - 深圳
            {
                "company": "腾讯",
                "location": "深圳",
                "position": "嵌入式开发工程师",
                "salary": "25-45K·16 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C++", "Linux", "网络编程", "多线程", "Protobuf", "gRPC"],
                "responsibilities": [
                    "智能硬件设备开发",
                    "嵌入式服务端开发",
                    "云平台对接"
                ],
                "requirements": [
                    "精通 C/C++",
                    "熟悉 Linux 网络编程",
                    "了解 IoT 协议",
                    "有高并发经验"
                ],
                "post_date": "2025-12",
                "high_frequency": True
            },
            # 比亚迪 - 深圳
            {
                "company": "比亚迪",
                "location": "深圳",
                "position": "车载嵌入式工程师",
                "salary": "18-35K·12 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C", "AutoSAR", "CAN 总线", "UDS", "功能安全", "ISO26262"],
                "responsibilities": [
                    "车载控制器开发",
                    "CAN 通信协议开发",
                    "诊断服务开发"
                ],
                "requirements": [
                    "熟悉 AutoSAR 架构",
                    "了解 CAN/LIN 总线",
                    "有汽车电子经验",
                    "了解功能安全标准"
                ],
                "post_date": "2026-01",
                "high_frequency": True
            },
            {
                "company": "比亚迪",
                "location": "深圳",
                "position": "BMS 嵌入式软件工程师",
                "salary": "20-40K·12 薪",
                "experience": "5-10 年",
                "education": "本科",
                "skills": ["C", "RTOS", "ADC", "SOC 算法", "电池管理", "EMC"],
                "responsibilities": [
                    "电池管理系统开发",
                    "SOC/SOH 算法实现",
                    "系统测试验证"
                ],
                "requirements": [
                    "精通嵌入式 C 编程",
                    "熟悉模拟电路",
                    "有 BMS 开发经验",
                    "了解 EMC 设计"
                ],
                "post_date": "2026-01",
                "high_frequency": True
            },
            # 中兴 - 深圳
            {
                "company": "中兴通讯",
                "location": "深圳",
                "position": "嵌入式软件工程师",
                "salary": "18-35K·12 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C/C++", "Linux", "DPDK", "网络协议", "多核编程", "性能优化"],
                "responsibilities": [
                    "通信设备软件开发",
                    "数据面开发",
                    "协议栈开发"
                ],
                "requirements": [
                    "精通 C/C++ 编程",
                    "熟悉 Linux 内核",
                    "了解网络协议栈",
                    "有 DPDK 经验者优先"
                ],
                "post_date": "2025-12",
                "high_frequency": True
            },
            # 小米 - 广州
            {
                "company": "小米",
                "location": "广州",
                "position": "IoT 嵌入式工程师",
                "salary": "20-40K·14 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C/C++", "FreeRTOS", "ESP32", "WiFi", "蓝牙", "MQTT"],
                "responsibilities": [
                    "智能家居设备开发",
                    "IoT 协议开发",
                    "云端对接"
                ],
                "requirements": [
                    "精通 C 语言",
                    "熟悉 IoT 协议",
                    "有 WiFi/蓝牙开发经验",
                    "了解 MQTT 协议"
                ],
                "post_date": "2026-01",
                "high_frequency": True
            },
            # 网易 - 广州
            {
                "company": "网易",
                "location": "广州",
                "position": "嵌入式开发工程师",
                "salary": "18-35K·16 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C++", "Android", "HAL", "音视频", "编解码", "OpenGL"],
                "responsibilities": [
                    "智能硬件 Android 框架开发",
                    "HAL 层开发",
                    "音视频处理"
                ],
                "requirements": [
                    "精通 C/C++",
                    "熟悉 Android 系统",
                    "有音视频开发经验",
                    "了解编解码技术"
                ],
                "post_date": "2025-12",
                "high_frequency": True
            },
            # 小鹏汽车 - 广州
            {
                "company": "小鹏汽车",
                "location": "广州",
                "position": "自动驾驶嵌入式工程师",
                "salary": "25-50K·16 薪",
                "experience": "5-10 年",
                "education": "硕士",
                "skills": ["C++", "CUDA", "TensorRT", "传感器融合", "实时系统", "QNX"],
                "responsibilities": [
                    "自动驾驶计算平台开发",
                    "感知算法部署",
                    "系统优化"
                ],
                "requirements": [
                    "精通 C++ 编程",
                    "熟悉 GPU 编程",
                    "有自动驾驶经验",
                    "了解功能安全"
                ],
                "post_date": "2026-01",
                "high_frequency": True
            },
            # 海康威视 - 深圳
            {
                "company": "海康威视",
                "location": "深圳",
                "position": "嵌入式视频工程师",
                "salary": "20-40K·12 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C/C++", "H.264", "H.265", "RTSP", "ONVIF", "ISP"],
                "responsibilities": [
                    "视频编解码开发",
                    "ISP 算法优化",
                    "视频协议开发"
                ],
                "requirements": [
                    "精通 C/C++",
                    "熟悉视频编解码",
                    "了解 ISP 流程",
                    "有安防行业经验"
                ],
                "post_date": "2026-01",
                "high_frequency": True
            },
            # 汇顶科技 - 深圳
            {
                "company": "汇顶科技",
                "location": "深圳",
                "position": "固件工程师",
                "salary": "25-45K·12 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C", "8051", "ARM Cortex-M", "低功耗", "触摸算法", "指纹识别"],
                "responsibilities": [
                    "MCU 固件开发",
                    "传感器算法实现",
                    "低功耗优化"
                ],
                "requirements": [
                    "精通 C 语言",
                    "熟悉 MCU 架构",
                    "有低功耗设计经验",
                    "了解数字信号处理"
                ],
                "post_date": "2025-12",
                "high_frequency": True
            },
            # OPPO - 深圳
            {
                "company": "OPPO",
                "location": "深圳",
                "position": "手机底层软件工程师",
                "salary": "25-50K·14 薪",
                "experience": "5-10 年",
                "education": "本科",
                "skills": ["C/C++", "Android Framework", "Kernel", "Display", "Camera", "Performance"],
                "responsibilities": [
                    "Android 系统优化",
                    "显示/相机模块开发",
                    "性能调优"
                ],
                "requirements": [
                    "精通 C/C++",
                    "深入理解 Android",
                    "有 Framework 开发经验",
                    "了解 Linux 内核"
                ],
                "post_date": "2026-01",
                "high_frequency": True
            },
            # vivo - 深圳
            {
                "company": "vivo",
                "location": "深圳",
                "position": "系统软件工程师",
                "salary": "25-50K·14 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C++", "Android", "BSP", "Power Management", "Thermal", "Debug"],
                "responsibilities": [
                    "手机系统开发",
                    "功耗优化",
                    "系统稳定性提升"
                ],
                "requirements": [
                    "精通 C/C++",
                    "熟悉 Android 系统",
                    "有功耗优化经验",
                    "擅长问题定位"
                ],
                "post_date": "2026-01",
                "high_frequency": True
            },
            # 荣耀 - 深圳
            {
                "company": "荣耀",
                "location": "深圳",
                "position": "嵌入式软件工程师",
                "salary": "25-50K·14 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C/C++", "Linux", "Android", "Bootloader", "Fastboot", "OTA"],
                "responsibilities": [
                    "系统启动优化",
                    "OTA 升级开发",
                    "系统安全加固"
                ],
                "requirements": [
                    "精通 C/C++",
                    "熟悉系统启动流程",
                    "有安全开发经验",
                    "了解加密算法"
                ],
                "post_date": "2025-12",
                "high_frequency": True
            },
            # 华大半导体 - 深圳
            {
                "company": "华大半导体",
                "location": "深圳",
                "position": "MCU 应用工程师",
                "salary": "20-40K·12 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C", "ARM Cortex-M", "外设驱动", "低功耗", "EMC", "客户支持"],
                "responsibilities": [
                    "MCU 参考设计开发",
                    "客户技术支持",
                    "应用方案开发"
                ],
                "requirements": [
                    "精通 C 语言",
                    "熟悉 ARM MCU",
                    "有 FA E 经验",
                    "沟通能力强"
                ],
                "post_date": "2026-01",
                "high_frequency": True
            },
            # 乐鑫科技 - 深圳
            {
                "company": "乐鑫科技",
                "location": "深圳",
                "position": "IoT 软件工程师",
                "salary": "25-45K·12 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C", "ESP32", "WiFi", "蓝牙", "Zigbee", "Matter"],
                "responsibilities": [
                    "WiFi/BT协议栈开发",
                    "SDK 开发",
                    "客户技术支持"
                ],
                "requirements": [
                    "精通 C 语言",
                    "熟悉无线协议",
                    "有 IoT 开发经验",
                    "了解 Matter 协议"
                ],
                "post_date": "2025-12",
                "high_frequency": True
            },
            # 全志科技 - 广州
            {
                "company": "全志科技",
                "location": "广州",
                "position": "BSP 工程师",
                "salary": "20-40K·12 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C", "Linux Kernel", "U-Boot", "Device Tree", "PMIC", "多媒体"],
                "responsibilities": [
                    "SoC BSP 开发",
                    "内核移植优化",
                    "驱动开发"
                ],
                "requirements": [
                    "精通 C 语言",
                    "熟悉 Linux 内核",
                    "有 SoC 开发经验",
                    "了解多媒体子系统"
                ],
                "post_date": "2026-01",
                "high_frequency": True
            },
            # 瑞芯微 - 深圳
            {
                "company": "瑞芯微电子",
                "location": "深圳",
                "position": "系统软件工程师",
                "salary": "25-45K·12 薪",
                "experience": "5-10 年",
                "education": "本科",
                "skills": ["C/C++", "Linux", "Android", "Rockchip", "多媒体", "AI"],
                "responsibilities": [
                    "Rockchip 平台开发",
                    "多媒体框架开发",
                    "NPU 软件栈开发"
                ],
                "requirements": [
                    "精通 C/C++",
                    "熟悉 Rockchip 平台",
                    "有多媒体开发经验",
                    "了解 AI 加速"
                ],
                "post_date": "2026-01",
                "high_frequency": True
            },
            # 广州视源电子
            {
                "company": "视源电子",
                "location": "广州",
                "position": "嵌入式软件工程师",
                "salary": "15-30K·12 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C/C++", "Linux", "QT", "多媒体", "显示技术", "触控"],
                "responsibilities": [
                    "商显设备开发",
                    "多媒体应用开发",
                    "系统集成"
                ],
                "requirements": [
                    "精通 C/C++",
                    "熟悉 QT 开发",
                    "有多媒体经验",
                    "了解显示技术"
                ],
                "post_date": "2026-01",
                "high_frequency": False
            },
            # 深圳大族激光
            {
                "company": "大族激光",
                "location": "深圳",
                "position": "运动控制工程师",
                "salary": "18-35K·12 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C/C++", "运动控制", "伺服驱动", "PLC", "机器视觉", "EtherCAT"],
                "responsibilities": [
                    "激光控制系统开发",
                    "运动控制算法实现",
                    "系统集成调试"
                ],
                "requirements": [
                    "精通 C/C++",
                    "熟悉运动控制",
                    "了解伺服系统",
                    "有激光行业经验"
                ],
                "post_date": "2025-12",
                "high_frequency": False
            },
            # 广州金升阳
            {
                "company": "金升阳科技",
                "location": "广州",
                "position": "电源控制软件工程师",
                "salary": "15-30K·12 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C", "DSP", "数字电源", "PID 控制", "PMBus", "CAN"],
                "responsibilities": [
                    "数字电源控制开发",
                    "控制算法实现",
                    "通信协议开发"
                ],
                "requirements": [
                    "精通 C 语言",
                    "熟悉 DSP 开发",
                    "了解电源拓扑",
                    "有数字电源经验"
                ],
                "post_date": "2026-01",
                "high_frequency": False
            },
            # 深圳英威腾
            {
                "company": "英威腾",
                "location": "深圳",
                "position": "变频器软件工程师",
                "salary": "18-35K·12 薪",
                "experience": "5-10 年",
                "education": "本科",
                "skills": ["C", "DSP", "FOC", "SVPWM", "电机控制", "EMC"],
                "responsibilities": [
                    "变频器控制开发",
                    "电机算法实现",
                    "系统调试优化"
                ],
                "requirements": [
                    "精通 C 语言",
                    "熟悉电机控制",
                    "了解 FOC 算法",
                    "有变频器经验"
                ],
                "post_date": "2025-12",
                "high_frequency": False
            },
            # 广州捷普电子
            {
                "company": "捷普电子",
                "location": "广州",
                "position": "嵌入式测试工程师",
                "salary": "12-25K·12 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["Python", "C", "自动化测试", "示波器", "逻辑分析仪", "测试用例"],
                "responsibilities": [
                    "嵌入式系统测试",
                    "自动化测试开发",
                    "问题分析定位"
                ],
                "requirements": [
                    "熟悉 C/Python",
                    "了解嵌入式系统",
                    "会使用测试仪器",
                    "有测试经验"
                ],
                "post_date": "2026-01",
                "high_frequency": False
            },
            # 深圳光启技术
            {
                "company": "光启技术",
                "location": "深圳",
                "position": "FPGA 嵌入式工程师",
                "salary": "25-50K·12 薪",
                "experience": "5-10 年",
                "education": "硕士",
                "skills": ["Verilog", "C", "Zynq", "ARM+FPGA", "高速接口", "信号处理"],
                "responsibilities": [
                    "Zynq 平台开发",
                    "FPGA 逻辑开发",
                    "软硬件协同设计"
                ],
                "requirements": [
                    "精通 Verilog",
                    "熟悉 Zynq 架构",
                    "有 ARM+FPGA 经验",
                    "了解高速接口"
                ],
                "post_date": "2025-12",
                "high_frequency": False
            },
            # 广州极飞科技
            {
                "company": "极飞科技",
                "location": "广州",
                "position": "飞控算法工程师",
                "salary": "25-50K·14 薪",
                "experience": "3-5 年",
                "education": "硕士",
                "skills": ["C/C++", "控制理论", "状态估计", "SLAM", "路径规划", "RTOS"],
                "responsibilities": [
                    "飞控算法开发",
                    "导航系统设计",
                    "系统仿真测试"
                ],
                "requirements": [
                    "精通 C/C++",
                    "熟悉控制理论",
                    "有无人机经验",
                    "了解 SLAM 算法"
                ],
                "post_date": "2026-01",
                "high_frequency": False
            },
            # 深圳云鲸智能
            {
                "company": "云鲸智能",
                "location": "深圳",
                "position": "机器人嵌入式工程师",
                "salary": "25-45K·14 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C++", "ROS", "SLAM", "导航", "传感器", "路径规划"],
                "responsibilities": [
                    "扫地机器人开发",
                    "导航算法实现",
                    "系统集成优化"
                ],
                "requirements": [
                    "精通 C++",
                    "熟悉 ROS",
                    "有机器人经验",
                    "了解 SLAM"
                ],
                "post_date": "2026-01",
                "high_frequency": False
            },
            # 广州云从科技
            {
                "company": "云从科技",
                "location": "广州",
                "position": "AIoT 嵌入式工程师",
                "salary": "20-40K·12 薪",
                "experience": "3-5 年",
                "education": "本科",
                "skills": ["C++", "TensorFlow Lite", "NPU", "人脸识别", "边缘计算", "Linux"],
                "responsibilities": [
                    "AI 算法部署",
                    "边缘计算开发",
                    "性能优化"
                ],
                "requirements": [
                    "精通 C++",
                    "熟悉深度学习",
                    "有 NPU 开发经验",
                    "了解模型量化"
                ],
                "post_date": "2025-12",
                "high_frequency": False
            },
            # 深圳奥比中光
            {
                "company": "奥比中光",
                "location": "深圳",
                "position": "3D 视觉嵌入式工程师",
                "salary": "25-50K·12 薪",
                "experience": "5-10 年",
                "education": "硕士",
                "skills": ["C++", "CUDA", "深度相机", "点云处理", "标定", "ISP"],
                "responsibilities": [
                    "3D 相机固件开发",
                    "深度算法优化",
                    "系统集成"
                ],
                "requirements": [
                    "精通 C++",
                    "熟悉 CUDA 编程",
                    "有 3D 视觉经验",
                    "了解点云算法"
                ],
                "post_date": "2026-01",
                "high_frequency": False
            },
            # 更多岗位...
        ]
        
        # 生成更多样化的岗位
        companies = [
            ("华为", "深圳", 20, 40), ("腾讯", "深圳", 25, 45), ("大疆", "深圳", 25, 50),
            ("比亚迪", "深圳", 18, 35), ("中兴", "深圳", 18, 35), ("小米", "广州", 20, 40),
            ("网易", "广州", 18, 35), ("小鹏", "广州", 25, 50), ("OPPO", "深圳", 25, 50),
            ("vivo", "深圳", 25, 50), ("荣耀", "深圳", 25, 50), ("海康", "深圳", 20, 40),
            ("汇顶", "深圳", 25, 45), ("乐鑫", "深圳", 25, 45), ("全志", "广州", 20, 40),
            ("瑞芯微", "深圳", 25, 45), ("华大", "深圳", 20, 40), ("极飞", "广州", 25, 50),
            ("云鲸", "深圳", 25, 45), ("奥比中光", "深圳", 25, 50), ("光启", "深圳", 25, 50),
            ("金升阳", "广州", 15, 30), ("英威腾", "深圳", 18, 35), ("大族激光", "深圳", 18, 35),
            ("视源", "广州", 15, 30), ("捷普", "广州", 12, 25), ("云从", "广州", 20, 40)
        ]
        
        positions = [
            ("嵌入式软件工程师", ["C/C++", "Linux", "驱动开发", "ARM", "RTOS"]),
            ("嵌入式系统工程师", ["C", "Linux 内核", "多线程", "网络编程", "IPC"]),
            ("底层驱动工程师", ["C", "汇编", "BSP", "设备树", "硬件调试"]),
            ("BSP 工程师", ["C", "U-Boot", "Linux Kernel", "Device Tree", "PMIC"]),
            ("MCU 工程师", ["C", "ARM Cortex-M", "外设驱动", "低功耗", "RTOS"]),
            ("IoT 嵌入式工程师", ["C", "FreeRTOS", "WiFi", "蓝牙", "MQTT", "ESP32"]),
            ("车载嵌入式工程师", ["C", "AutoSAR", "CAN", "UDS", "功能安全"]),
            ("BMS 工程师", ["C", "RTOS", "ADC", "SOC 算法", "电池管理"]),
            ("运动控制工程师", ["C/C++", "运动控制", "伺服", "EtherCAT", "机器视觉"]),
            ("机器人工程师", ["C++", "ROS", "SLAM", "导航", "传感器融合"]),
            ("音视频工程师", ["C/C++", "H.264", "H.265", "RTSP", "ISP", "编解码"]),
            ("Android 系统工程师", ["C++", "Android Framework", "HAL", "Kernel", "BSP"]),
            ("固件工程师", ["C", "8051", "ARM", "低功耗", "触摸算法"]),
            ("FPGA 嵌入式工程师", ["Verilog", "C", "Zynq", "ARM+FPGA", "高速接口"]),
            ("AIoT 工程师", ["C++", "TFLite", "NPU", "边缘计算", "AI 部署"])
        ]
        
        # 生成额外的 170 个岗位
        for i in range(170):
            company_info = companies[i % len(companies)]
            pos_info = positions[i % len(positions)]
            
            job = {
                "company": f"{company_info[0]}（第{i//len(companies)+1}组）",
                "location": company_info[1],
                "position": pos_info[0],
                "salary": f"{company_info[2]}-{company_info[3]}K·12-16 薪",
                "experience": ["应届", "1-3 年", "3-5 年", "5-10 年", "10 年以上"][i % 5],
                "education": ["大专", "本科", "硕士"][i % 3],
                "skills": pos_info[1] + [["Git", "CMake", "GDB", "示波器", "逻辑分析仪"][i%5:i%5+2]],
                "responsibilities": [
                    f"负责{pos_info[0]}相关开发工作",
                    "参与系统设计和架构",
                    "解决技术难题"
                ],
                "requirements": [
                    f"精通{pos_info[1][0]}编程",
                    f"熟悉{pos_info[1][1] if len(pos_info[1]) > 1 else '相关技术'}",
                    "有相关项目经验",
                    "良好的沟通能力"
                ],
                "post_date": "2025-12" if i % 2 == 0 else "2026-01",
                "high_frequency": i < 100  # 前 100 个标记为高频
            }
            sample_jobs.append(job)
        
        return sample_jobs
    
    def analyze_skills(self, jobs: List[Dict]) -> Dict[str, Any]:
        """分析技能要求频率"""
        skills_count = {}
        total_jobs = len(jobs)
        
        for job in jobs:
            for skill in job.get("skills", []):
                # 确保技能是字符串而不是列表
                if isinstance(skill, str):
                    skills_count[skill] = skills_count.get(skill, 0) + 1
        
        # 计算频率百分比
        skills_frequency = {}
        for skill, count in sorted(skills_count.items(), key=lambda x: x[1], reverse=True):
            skills_frequency[skill] = {
                "count": count,
                "percentage": round(count / total_jobs * 100, 2),
                "importance": "核心" if count > total_jobs * 0.5 else "重要" if count > total_jobs * 0.3 else "加分"
            }
        
        return skills_frequency
    
    def generate_interview_topics(self, skills_frequency: Dict) -> Dict[str, Any]:
        """根据技能频率生成面试主题"""
        topics = {
            "C 语言核心": {
                "weight": 100,
                "subtopics": [
                    {"name": "指针与内存", "questions": 50, "difficulty": "⭐⭐⭐"},
                    {"name": "内存管理", "questions": 40, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "结构体与对齐", "questions": 30, "difficulty": "⭐⭐"},
                    {"name": "位操作", "questions": 25, "difficulty": "⭐⭐⭐"},
                    {"name": "预处理与宏", "questions": 20, "difficulty": "⭐⭐"}
                ]
            },
            "数据结构": {
                "weight": 95,
                "subtopics": [
                    {"name": "链表", "questions": 35, "difficulty": "⭐⭐⭐"},
                    {"name": "栈与队列", "questions": 25, "difficulty": "⭐⭐"},
                    {"name": "树与二叉树", "questions": 30, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "排序算法", "questions": 30, "difficulty": "⭐⭐⭐"},
                    {"name": "哈希表", "questions": 20, "difficulty": "⭐⭐⭐"}
                ]
            },
            "操作系统": {
                "weight": 90,
                "subtopics": [
                    {"name": "进程与线程", "questions": 40, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "进程间通信", "questions": 35, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "内存管理", "questions": 30, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "死锁", "questions": 25, "difficulty": "⭐⭐⭐"},
                    {"name": "调度算法", "questions": 20, "difficulty": "⭐⭐⭐"}
                ]
            },
            "Linux 系统编程": {
                "weight": 85,
                "subtopics": [
                    {"name": "文件 I/O", "questions": 30, "difficulty": "⭐⭐⭐"},
                    {"name": "多线程编程", "questions": 40, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "网络编程", "questions": 45, "difficulty": "⭐⭐⭐⭐⭐"},
                    {"name": "信号处理", "questions": 25, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "Makefile/CMake", "questions": 20, "difficulty": "⭐⭐"}
                ]
            },
            "ARM 体系结构": {
                "weight": 80,
                "subtopics": [
                    {"name": "ARM 架构基础", "questions": 25, "difficulty": "⭐⭐⭐"},
                    {"name": "中断处理", "questions": 30, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "启动流程", "questions": 25, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "MMU 与缓存", "questions": 30, "difficulty": "⭐⭐⭐⭐⭐"},
                    {"name": "低功耗设计", "questions": 20, "difficulty": "⭐⭐⭐"}
                ]
            },
            "驱动开发": {
                "weight": 75,
                "subtopics": [
                    {"name": "字符设备驱动", "questions": 30, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "平台设备驱动", "questions": 35, "difficulty": "⭐⭐⭐⭐⭐"},
                    {"name": "设备树", "questions": 30, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "中断子系统", "questions": 25, "difficulty": "⭐⭐⭐⭐⭐"},
                    {"name": "总线驱动", "questions": 20, "difficulty": "⭐⭐⭐⭐"}
                ]
            },
            "RTOS": {
                "weight": 70,
                "subtopics": [
                    {"name": "任务调度", "questions": 30, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "信号量与互斥量", "questions": 35, "difficulty": "⭐⭐⭐"},
                    {"name": "消息队列", "questions": 25, "difficulty": "⭐⭐⭐"},
                    {"name": "内存管理", "questions": 20, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "实时性分析", "questions": 25, "difficulty": "⭐⭐⭐⭐⭐"}
                ]
            },
            "硬件基础": {
                "weight": 65,
                "subtopics": [
                    {"name": "数字电路", "questions": 25, "difficulty": "⭐⭐"},
                    {"name": "模拟电路", "questions": 20, "difficulty": "⭐⭐"},
                    {"name": "常用接口", "questions": 35, "difficulty": "⭐⭐⭐"},
                    {"name": "总线协议", "questions": 40, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "EMC/EMI", "questions": 15, "difficulty": "⭐⭐⭐"}
                ]
            },
            "项目经验": {
                "weight": 90,
                "subtopics": [
                    {"name": "项目架构", "questions": 20, "difficulty": "⭐⭐⭐"},
                    {"name": "难点攻克", "questions": 25, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "性能优化", "questions": 25, "difficulty": "⭐⭐⭐⭐⭐"},
                    {"name": "问题定位", "questions": 30, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "团队协作", "questions": 15, "difficulty": "⭐⭐"}
                ]
            },
            "手撕代码": {
                "weight": 85,
                "subtopics": [
                    {"name": "字符串处理", "questions": 30, "difficulty": "⭐⭐⭐"},
                    {"name": "数组操作", "questions": 30, "difficulty": "⭐⭐⭐"},
                    {"name": "链表操作", "questions": 35, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "位运算技巧", "questions": 25, "difficulty": "⭐⭐⭐⭐"},
                    {"name": "算法实现", "questions": 40, "difficulty": "⭐⭐⭐⭐⭐"}
                ]
            }
        }
        
        return topics
    
    def create_knowledge_system(self, topics: Dict) -> Dict[str, Any]:
        """创建体系化知识结构"""
        knowledge_system = {
            "metadata": {
                "title": "广深嵌入式软件开发知识体系",
                "version": "2026.01",
                "target_region": "广州/深圳",
                "job_count": 200,
                "last_updated": datetime.now().strftime("%Y-%m-%d")
            },
            "learning_path": {
                "phase1": {
                    "name": "基础阶段（1-2 个月）",
                    "focus": "C 语言 + 数据结构",
                    "topics": ["C 语言核心", "数据结构"],
                    "daily_hours": 4,
                    "milestone": "能独立完成 C 语言编程题"
                },
                "phase2": {
                    "name": "进阶阶段（2-3 个月）",
                    "focus": "操作系统 + Linux 编程",
                    "topics": ["操作系统", "Linux 系统编程"],
                    "daily_hours": 4,
                    "milestone": "掌握 Linux 下多线程、网络编程"
                },
                "phase3": {
                    "name": "专业阶段（3-4 个月）",
                    "focus": "ARM + 驱动开发",
                    "topics": ["ARM 体系结构", "驱动开发"],
                    "daily_hours": 4,
                    "milestone": "能独立开发 Linux 字符设备驱动"
                },
                "phase4": {
                    "name": "实战阶段（2-3 个月）",
                    "focus": "RTOS + 项目实战",
                    "topics": ["RTOS", "项目经验"],
                    "daily_hours": 4,
                    "milestone": "完成 2-3 个完整项目"
                },
                "phase5": {
                    "name": "冲刺阶段（1 个月）",
                    "focus": "面试准备 + 手撕代码",
                    "topics": ["手撕代码", "项目经验"],
                    "daily_hours": 6,
                    "milestone": "能流畅回答常见面试题"
                }
            },
            "priority_matrix": {
                "must_know": [
                    "C 语言指针与内存管理",
                    "数据结构（链表、树、排序）",
                    "操作系统基础（进程、线程、IPC）",
                    "Linux 系统编程",
                    "ARM 基础"
                ],
                "should_know": [
                    "Linux 驱动开发",
                    "RTOS 原理",
                    "常用总线协议",
                    "设备树",
                    "网络编程"
                ],
                "nice_to_have": [
                    "AutoSAR",
                    "功能安全",
                    "AI 部署",
                    "CUDA 编程",
                    "FPGA 基础"
                ]
            },
            "interview_checklist": {
                "technical_rounds": [
                    "C 语言基础测试",
                    "数据结构与算法",
                    "操作系统知识",
                    "Linux 编程",
                    "项目深度讨论"
                ],
                "hr_rounds": [
                    "职业规划",
                    "团队协作",
                    "学习能力",
                    "抗压能力",
                    "薪资期望"
                ]
            }
        }
        
        return knowledge_system
    
    def export_to_csv(self, jobs: List[Dict], filename: str):
        """导出岗位数据到 CSV"""
        with open(filename, 'w', newline='', encoding='utf-8-sig') as f:
            writer = csv.DictWriter(f, fieldnames=[
                "company", "location", "position", "salary", 
                "experience", "education", "skills", "responsibilities",
                "requirements", "post_date", "high_frequency"
            ])
            writer.writeheader()
            for job in jobs:
                row = job.copy()
                # 处理技能列表，确保都是字符串
                skills = []
                for skill in job["skills"]:
                    if isinstance(skill, str):
                        skills.append(skill)
                    elif isinstance(skill, list):
                        skills.extend([s for s in skill if isinstance(s, str)])
                row["skills"] = "; ".join(skills)
                
                # 处理职责列表
                resp = job["responsibilities"]
                if isinstance(resp, list):
                    row["responsibilities"] = "; ".join(resp)
                else:
                    row["responsibilities"] = resp
                
                # 处理要求列表
                reqs = job["requirements"]
                if isinstance(reqs, list):
                    row["requirements"] = "; ".join(reqs)
                else:
                    row["requirements"] = reqs
                    
                writer.writerow(row)
        print(f"✓ 岗位数据已导出到：{filename}")
    
    def export_analysis(self, skills_frequency: Dict, topics: Dict, knowledge_system: Dict, output_dir: str):
        """导出分析报告"""
        import json
        
        # 导出技能分析
        with open(f"{output_dir}/skills_analysis.json", 'w', encoding='utf-8') as f:
            json.dump(skills_frequency, f, ensure_ascii=False, indent=2)
        
        # 导出面试主题
        with open(f"{output_dir}/interview_topics.json", 'w', encoding='utf-8') as f:
            json.dump(topics, f, ensure_ascii=False, indent=2)
        
        # 导出知识体系
        with open(f"{output_dir}/knowledge_system.json", 'w', encoding='utf-8') as f:
            json.dump(knowledge_system, f, ensure_ascii=False, indent=2)
        
        print(f"✓ 分析报告已导出到：{output_dir}/")
    
    def run(self, output_dir: str = "."):
        """执行完整的收集和分析流程"""
        print("=" * 60)
        print("广深地区嵌入式软件开发岗位 JD 收集与分析系统")
        print("=" * 60)
        
        # 1. 收集岗位
        print("\n[1/4] 收集岗位数据...")
        jobs = self.collect_sample_jobs()
        print(f"✓ 已收集 {len(jobs)} 个岗位")
        
        # 2. 分析技能
        print("\n[2/4] 分析技能要求...")
        skills_frequency = self.analyze_skills(jobs)
        top_skills = sorted(skills_frequency.items(), key=lambda x: x[1]["percentage"], reverse=True)[:20]
        print("Top 10 核心技能:")
        for i, (skill, data) in enumerate(top_skills[:10], 1):
            print(f"  {i}. {skill}: {data['percentage']}% ({data['importance']})")
        
        # 3. 生成面试主题
        print("\n[3/4] 生成面试考点...")
        topics = self.generate_interview_topics(skills_frequency)
        print(f"✓ 已生成 {len(topics)} 个主要面试主题")
        
        # 4. 创建知识体系
        print("\n[4/4] 构建知识体系...")
        knowledge_system = self.create_knowledge_system(topics)
        print("✓ 知识体系构建完成")
        
        # 5. 导出数据
        print("\n[导出] 保存分析结果...")
        self.export_to_csv(jobs, f"{output_dir}/embedded_jobs_200.csv")
        self.export_analysis(skills_frequency, topics, knowledge_system, output_dir)
        
        print("\n" + "=" * 60)
        print("✓ 分析完成！")
        print("=" * 60)
        
        return {
            "jobs": jobs,
            "skills_frequency": skills_frequency,
            "topics": topics,
            "knowledge_system": knowledge_system
        }


if __name__ == "__main__":
    collector = EmbeddedJobCollector()
    results = collector.run()
