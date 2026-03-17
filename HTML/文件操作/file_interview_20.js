/**
 * 文件操作面试题 20 - 临时文件操作
 * 难度：⭐⭐⭐
 * 考点：tmpfile/tmpnam、安全临时文件
 */

export const file_interview_20 = {
  title: '临时文件操作',
  difficulty: '中级',
  question: `如何安全地创建和使用临时文件？

tmpfile() 和 tmpnam() 有什么区别？`,
  answer: `临时文件创建方法：

1. tmpfile() - 推荐
   FILE *tmp = tmpfile();
   // 自动创建唯一临时文件
   // 程序结束时自动删除
   // 安全，不会留下文件

2. tmpnam() - 不推荐
   char name[L_tmpnam];
   tmpnam(name);  // 获取临时文件名
   FILE *tmp = fopen(name, "w+");
   // 有竞态条件风险
   // 需要手动删除

3. mkstemp() - 最安全（POSIX）
   char template[] = "/tmp/myapp.XXXXXX";
   int fd = mkstemp(template);
   // 原子操作，无竞态条件
   // 需要手动关闭和删除

推荐做法：
- 简单场景用 tmpfile()
- 需要文件名用 mkstemp()
- 避免用 tmpnam()

tmpfile 示例：
FILE *tmp = tmpfile();
if (tmp == NULL) { /* 错误处理 */ }
fprintf(tmp, "临时数据");
rewind(tmp);
// 程序结束自动删除`,
  keyPoints: [
    'tmpfile 自动清理',
    'tmpnam 有竞态风险',
    'mkstemp 最安全',
    '临时文件及时清理'
  ],
  commonMistakes: [
    '用 tmpnam 导致安全漏洞',
    '临时文件不删除',
    '硬编码临时文件路径',
    '忽略 tmpfile 返回值'
  ]
};
