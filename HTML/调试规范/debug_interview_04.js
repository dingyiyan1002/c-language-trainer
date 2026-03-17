/**
 * 调试规范题 04 - GDB 基本命令
 */
export const debug_interview_04 = {
  title: 'GDB 基本命令',
  difficulty: '高级',
  question: `学习调试技巧`,
  code: `# GDB 调试基本命令

gcc -g program.c -o program    # 编译时加-g 选项

gdb ./program                  # 启动 GDB
(gdb) break main               # 在 main 函数设断点
(gdb) run                      # 运行程序
(gdb) next                     # 单步执行
(gdb) print variable           # 打印变量值
(gdb) continue                 # 继续执行
(gdb) backtrace                # 查看调用栈
(gdb) quit                     # 退出 GDB`,
  answer: `GDB 调试器基本用法`,
  keyPoints: ['调试方法', '开发规范', '问题排查']
};
