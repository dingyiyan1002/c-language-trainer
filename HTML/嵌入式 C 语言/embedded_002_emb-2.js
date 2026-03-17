window.LESSON_DATA = {
  "meta": {
    "chapterId": "embedded",
    "lessonId": "emb-2",
    "title": "寄存器访问",
    "index": 2,
    "filename": "embedded_002_emb-2.js",
    "keyPoints": [
      "内存映射",
      "volatile",
      "位操作",
      "硬件寄存器"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <stdint.h>",
    "#define REG_ADDR  0x40001000",
    "#define REG_CTRL  (*(volatile uint32_t*)REG_ADDR)",
    "#define REG_STAT  (*(volatile uint32_t*)(REG_ADDR + 4))",
    "#define BIT_ENABLE  0x01",
    "#define BIT_READY   0x02",
    "void reg_write(uint32_t reg, uint32_t mask, uint32_t val) {",
    "    uint32_t tmp = *(volatile uint32_t*)reg;",
    "    if (val) tmp |= mask; else tmp &= ~mask;",
    "    *(volatile uint32_t*)reg = tmp;",
    "}",
    "int main(void) {",
    "    reg_write(REG_ADDR, BIT_ENABLE, 1);",
    "    while (!(*(volatile uint32_t*)REG_STAT & BIT_READY));",
    "    printf(\"设备就绪\\n\");",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：寄存器访问",
        "detail": "volatile 关键字用于访问硬件寄存器。",
        "actor": "System",
        "icon": "info",
        "color": "blue"
      }
    },
    {
      "line": 0,
      "vars": [],
      "explanation": {
        "text": "执行第1行",
        "detail": "#include <stdio.h>",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 1,
      "vars": [],
      "explanation": {
        "text": "执行第2行",
        "detail": "#include <stdint.h>",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 2,
      "vars": [],
      "explanation": {
        "text": "执行第3行",
        "detail": "#define REG_ADDR  0x40001000",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 3,
      "vars": [],
      "explanation": {
        "text": "执行第4行",
        "detail": "#define REG_CTRL  (*(volatile uint32_t*)REG_ADDR)",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 4,
      "vars": [],
      "explanation": {
        "text": "执行第5行",
        "detail": "#define REG_STAT  (*(volatile uint32_t*)(REG_ADDR + 4))",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 5,
      "vars": [],
      "explanation": {
        "text": "执行第6行",
        "detail": "#define BIT_ENABLE  0x01",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 6,
      "vars": [],
      "explanation": {
        "text": "执行第7行",
        "detail": "#define BIT_READY   0x02",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 7,
      "vars": [],
      "explanation": {
        "text": "执行第8行",
        "detail": "void reg_write(uint32_t reg, uint32_t mask, uint32_t val) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 8,
      "vars": [],
      "explanation": {
        "text": "执行第9行",
        "detail": "uint32_t tmp = *(volatile uint32_t*)reg;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 9,
      "vars": [],
      "explanation": {
        "text": "执行第10行",
        "detail": "if (val) tmp |= mask; else tmp &= ~mask;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 10,
      "vars": [],
      "explanation": {
        "text": "执行第11行",
        "detail": "*(volatile uint32_t*)reg = tmp;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 11,
      "vars": [],
      "explanation": {
        "text": "执行第12行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 12,
      "vars": [],
      "explanation": {
        "text": "执行第13行",
        "detail": "int main(void) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 13,
      "vars": [],
      "explanation": {
        "text": "执行第14行",
        "detail": "reg_write(REG_ADDR, BIT_ENABLE, 1);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 14,
      "vars": [],
      "explanation": {
        "text": "执行第15行",
        "detail": "while (!(*(volatile uint32_t*)REG_STAT & BIT_READY));",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 15,
      "vars": [],
      "explanation": {
        "text": "执行第16行",
        "detail": "printf(\"设备就绪\\n\");",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 16,
      "vars": [],
      "explanation": {
        "text": "执行第17行",
        "detail": "return 0;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 17,
      "vars": [],
      "explanation": {
        "text": "执行第18行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习寄存器访问",
    "pitfalls": [
      "内存映射",
      "volatile",
      "位操作"
    ],
    "transferQuestion": "嵌入式 C 与桌面 C 有什么区别？",
    "miniExercise": "编写一个简单的 GPIO 驱动程序"
  }
};
