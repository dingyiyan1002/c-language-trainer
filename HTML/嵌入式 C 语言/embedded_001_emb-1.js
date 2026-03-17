window.LESSON_DATA = {
  "meta": {
    "chapterId": "embedded",
    "lessonId": "emb-1",
    "title": "嵌入式 C 语言特点",
    "index": 1,
    "filename": "embedded_001_emb-1.js",
    "keyPoints": [
      "资源受限",
      "直接硬件访问",
      "实时性",
      "可移植性"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <stdint.h>",
    "#define LED_PIN  (1 << 5)",
    "#define BUTTON   (1 << 3)",
    "volatile uint32_t *GPIO_DATA = (uint32_t*)0x40020000;",
    "volatile uint32_t *GPIO_DIR  = (uint32_t*)0x40020004;",
    "int main(void) {",
    "    *GPIO_DIR |= LED_PIN;",
    "    while (1) {",
    "        *GPIO_DATA |= LED_PIN;",
    "        for (volatile int i = 0; i < 100000; i++);",
    "        *GPIO_DATA &= ~LED_PIN;",
    "        for (volatile int i = 0; i < 100000; i++);",
    "    }",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：嵌入式 C 语言特点",
        "detail": "嵌入式 C 语言需要考虑资源限制和硬件特性。",
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
        "detail": "#define LED_PIN  (1 << 5)",
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
        "detail": "#define BUTTON   (1 << 3)",
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
        "detail": "volatile uint32_t *GPIO_DATA = (uint32_t*)0x40020000;",
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
        "detail": "volatile uint32_t *GPIO_DIR  = (uint32_t*)0x40020004;",
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
        "detail": "int main(void) {",
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
        "detail": "*GPIO_DIR |= LED_PIN;",
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
        "detail": "while (1) {",
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
        "detail": "*GPIO_DATA |= LED_PIN;",
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
        "detail": "for (volatile int i = 0; i < 100000; i++);",
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
        "detail": "*GPIO_DATA &= ~LED_PIN;",
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
        "detail": "for (volatile int i = 0; i < 100000; i++);",
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
        "detail": "}",
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
        "detail": "return 0;",
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
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习嵌入式 C 语言特点",
    "pitfalls": [
      "资源受限",
      "直接硬件访问",
      "实时性"
    ],
    "transferQuestion": "嵌入式 C 与桌面 C 有什么区别？",
    "miniExercise": "编写一个简单的 GPIO 驱动程序"
  }
};
