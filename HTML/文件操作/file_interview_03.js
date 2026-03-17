/**
 * 文件操作题 03 - 二进制文件读写
 */
export const file_interview_03 = {
  title: '二进制文件读写',
  difficulty: '高级',
  question: `完成以下功能`,
  code: `#include <stdio.h>
#include <stdlib.h>

struct Data {
    int id;
    char name[50];
    float score;
};

int main() {
    struct Data d = {1, "Alice", 95.5};
    
    FILE *fp = fopen("data.bin", "wb");
    fwrite(&d, sizeof(struct Data), 1, fp);
    fclose(fp);
    
    // 读取
    struct Data read_d;
    fp = fopen("data.bin", "rb");
    fread(&read_d, sizeof(struct Data), 1, fp);
    printf("ID: %d, Name: %s, Score: %.1f\n", 
           read_d.id, read_d.name, read_d.score);
    fclose(fp);
    return 0;
}`,
  answer: `fread/fwrite 二进制操作`,
  keyPoints: ['文件操作', '标准库', '实际应用']
};
