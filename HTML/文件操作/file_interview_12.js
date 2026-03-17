/**
 * 文件操作面试题 12 - 格式化读写 (fprintf/fscanf)
 * 难度：⭐⭐⭐
 * 考点：格式化文件操作
 */

export const file_interview_12 = {
  title: '格式化文件读写',
  difficulty: '中级',
  question: `以下代码的输出是什么？指出 fscanf 的注意事项。

#include <stdio.h>

int main() {
    FILE *fp = fopen("data.txt", "w+");
    
    int age = 25;
    float score = 95.5;
    char name[50] = "张三";
    
    fprintf(fp, "%s %d %.1f\n", name, age, score);
    fprintf(fp, "李四 30 88.0\n");
    
    rewind(fp);
    
    char readName[50];
    int readAge;
    float readScore;
    
    fscanf(fp, "%s %d %f", readName, &readAge, &readScore);
    printf("%s, %d 岁，%.1f 分\n", readName, readAge, readScore);
    
    fclose(fp);
    return 0;
}`,
  answer: `输出：
张三，25 岁，95.5 分

fscanf 注意事项：
1. 字符串不需要&，其他类型需要&
2. 按空白字符（空格、换行、制表符）分隔
3. 返回值是成功读取的字段数
4. 遇到不匹配的格式会停止读取

建议：
- 检查 fscanf 返回值确保读取成功
- 复杂格式建议用 fgets + sscanf 组合
- 注意缓冲区溢出风险`,
  keyPoints: [
    'fprintf/fscanf 用于格式化读写',
    'fscanf 按空白字符分隔字段',
    '字符串不需要&，数值类型需要&',
    '检查返回值确保读取成功'
  ],
  commonMistakes: [
    '忘记给数值类型加&',
    '不检查 fscanf 返回值',
    '字符串缓冲区太小导致溢出',
    '不理解空白字符分隔规则'
  ]
};