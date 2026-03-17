/**
 * 文件操作面试题 18 - feof 正确用法
 * 难度：⭐⭐⭐⭐
 * 考点：文件结束判断、常见陷阱
 */

export const file_interview_18 = {
  title: 'feof 正确用法',
  difficulty: '高级',
  question: `以下代码有什么问题？

FILE *fp = fopen("data.txt", "r");
while (!feof(fp)) {
    char ch = fgetc(fp);
    printf("%c", ch);
}
fclose(fp);`,
  answer: `经典的 feof 误用！

问题：
feof() 只有在尝试读取超过文件末尾后才会返回真。
这导致循环会多执行一次，最后一次读取到 EOF 也会被打印。

错误输出：
假设文件内容是"ABC"
实际输出："ABC" (多打印 EOF)

正确写法 1（推荐）：
int ch;  // 必须是 int，不是 char！
while ((ch = fgetc(fp)) != EOF) {
    printf("%c", ch);
}

正确写法 2：
while (1) {
    int ch = fgetc(fp);
    if (ch == EOF) break;
    printf("%c", ch);
}

关键点：
- fgetc 返回 int，因为 EOF 是 -1，char 可能无法表示
- feof 用于判断"是否已经读到末尾"，不是"是否将要读到末尾"
- 应该在读取后检查返回值，而不是用 feof 预判`,
  keyPoints: [
    'feof 是后置判断',
    'fgetc 返回 int 不是 char',
    'EOF 是 -1',
    '读取后检查返回值'
  ],
  commonMistakes: [
    '用 while(!feof(fp)) 做循环条件',
    'char 接收 fgetc 返回值',
    '不理解 feof 的触发时机',
    '忽略 EOF 可能等于有效字符值'
  ]
};
