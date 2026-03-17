/**
 * 文件操作面试题 15 - fseek/ftell 文件定位
 * 难度：⭐⭐⭐⭐
 * 考点：文件指针定位、文件大小计算
 */

export const file_interview_15 = {
  title: 'fseek/ftell 文件定位',
  difficulty: '高级',
  question: `如何用 fseek/ftell 获取文件大小？

以下代码有什么问题？

long get_file_size(FILE *fp) {
    fseek(fp, 0, SEEK_END);
    long size = ftell(fp);
    return size;
}`,
  answer: `获取文件大小的正确方法：

long get_file_size(FILE *fp) {
    if (fp == NULL) return -1;
    
    // 保存当前位置
    long current_pos = ftell(fp);
    
    // 移动到文件末尾
    fseek(fp, 0, SEEK_END);
    long size = ftell(fp);
    
    // 恢复原来位置
    fseek(fp, current_pos, SEEK_SET);
    
    return size;
}

问题：
1. 原代码没有保存和恢复文件指针位置
2. 没有检查 fp 是否为 NULL
3. 没有检查 fseek/ftell 返回值

SEEK 参数：
- SEEK_SET: 文件开头
- SEEK_CUR: 当前位置
- SEEK_END: 文件末尾

fseek 返回值：成功返回 0，失败返回非 0`,
  keyPoints: [
    'fseek 定位文件指针',
    'ftell 获取当前位置',
    'SEEK_SET/CURR/END 三个基准',
    '操作后要恢复文件指针位置'
  ],
  commonMistakes: [
    '忘记恢复文件指针原位置',
    '不检查 fseek 返回值',
    '在文本模式下用 fseek 定位（行为未定义）',
    '忽略 ftell 可能返回 -1'
  ]
};
