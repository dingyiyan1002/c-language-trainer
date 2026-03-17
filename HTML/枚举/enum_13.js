/**
 * 枚举练习 13
 * 难度：中高级 ⭐⭐⭐
 * 主题：枚举类型应用
 */

const exercise = {
    id: 13,
    title: "枚举类型 - 状态机与标志位",
    difficulty: "中高级",
    category: "enum",
    topics: [
        "枚举定义",
        "状态机实现",
        "位标志",
        "类型安全"
    ],
    description: "本题考察枚举类型的高级应用...",
    codeExample: 
// 状态枚举
typedef enum {
    STATE_IDLE = 0,
    STATE_RUNNING,
    STATE_PAUSED,
    STATE_STOPPED
} SystemState;

// 位标志枚举
typedef enum {
    FLAG_NONE = 0,
    FLAG_READ = (1 << 0),
    FLAG_WRITE = (1 << 1),
    FLAG_EXECUTE = (1 << 2)
} PermissionFlags;
,
    practicalUse: "状态机、权限标志、选项配置",
    hints: ["枚举值从 0 开始", "位标志使用位移", "类型安全优势"]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = exercise;
}
