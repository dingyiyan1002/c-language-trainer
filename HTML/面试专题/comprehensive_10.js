/**
 * 综合实战题 10 - 实现快速选择算法
 * 难度：★★★★★
 */
export const comprehensive_10 = {
  title: '实现快速选择算法',
  difficulty: '高级',
  question: `实现以下功能`,
  code: `#include <stdio.h>

int partition(int *arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

// 找第 k 小的元素（k 从 1 开始）
int quick_select(int *arr, int low, int high, int k) {
    if (low <= high) {
        int pivot_idx = partition(arr, low, high);
        int rank = pivot_idx - low + 1;
        
        if (rank == k) return arr[pivot_idx];
        if (k < rank) return quick_select(arr, low, pivot_idx - 1, k);
        return quick_select(arr, pivot_idx + 1, high, k - rank);
    }
    return -1;
}`,
  answer: `快速排序变种，平均 O(n) 找第 k 小`,
  keyPoints: ['经典算法', '代码实现', '边界处理']
};
