window.LESSON_DATA = {
  "meta": {
    "chapterId": "algo",
    "lessonId": "algo-5",
    "title": "二叉树基础",
    "index": 5,
    "filename": "algo_005_algo-5.js",
    "keyPoints": [
      "树的遍历",
      "BST",
      "递归",
      "层序遍历"
    ]
  },
  "codeLines": [
    "#include <stdio.h>",
    "#include <stdlib.h>",
    "typedef struct TreeNode {",
    "    int val;",
    "    struct TreeNode *left, *right;",
    "} TreeNode;",
    "TreeNode* create(int v) { TreeNode* n = malloc(sizeof(TreeNode)); n->val = v; n->left = n->right = NULL; return n; }",
    "void inorder(TreeNode* root) {",
    "    if (!root) return;",
    "    inorder(root->left);",
    "    printf(\"%d \", root->val);",
    "    inorder(root->right);",
    "}",
    "void level_order(TreeNode* root) {",
    "    if (!root) return;",
    "    TreeNode* q[100]; int f = 0, r = 0;",
    "    q[r++] = root;",
    "    while (f < r) {",
    "        TreeNode* n = q[f++];",
    "        printf(\"%d \", n->val);",
    "        if (n->left) q[r++] = n->left;",
    "        if (n->right) q[r++] = n->right;",
    "    }",
    "    printf(\"\\n\");",
    "}",
    "int main() {",
    "    TreeNode* root = create(1);",
    "    root->left = create(2); root->right = create(3);",
    "    root->left->left = create(4); root->left->right = create(5);",
    "    printf(\"中序：\"); inorder(root); printf(\"\\n\");",
    "    printf(\"层序：\"); level_order(root);",
    "    return 0;",
    "}"
  ],
  "varConfig": [],
  "scenes": [
    {
      "line": -1,
      "vars": [],
      "explanation": {
        "text": "知识点：二叉树基础",
        "detail": "二叉树是重要数据结构。",
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
        "detail": "#include <stdlib.h>",
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
        "detail": "typedef struct TreeNode {",
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
        "detail": "int val;",
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
        "detail": "struct TreeNode *left, *right;",
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
        "detail": "} TreeNode;",
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
        "detail": "TreeNode* create(int v) { TreeNode* n = malloc(sizeof(TreeNode)); n->val = v; n-",
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
        "detail": "void inorder(TreeNode* root) {",
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
        "detail": "if (!root) return;",
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
        "detail": "inorder(root->left);",
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
        "detail": "printf(\"%d \", root->val);",
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
        "detail": "inorder(root->right);",
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
        "detail": "}",
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
        "detail": "void level_order(TreeNode* root) {",
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
        "detail": "if (!root) return;",
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
        "detail": "TreeNode* q[100]; int f = 0, r = 0;",
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
        "detail": "q[r++] = root;",
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
        "detail": "while (f < r) {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 18,
      "vars": [],
      "explanation": {
        "text": "执行第19行",
        "detail": "TreeNode* n = q[f++];",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 19,
      "vars": [],
      "explanation": {
        "text": "执行第20行",
        "detail": "printf(\"%d \", n->val);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 20,
      "vars": [],
      "explanation": {
        "text": "执行第21行",
        "detail": "if (n->left) q[r++] = n->left;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 21,
      "vars": [],
      "explanation": {
        "text": "执行第22行",
        "detail": "if (n->right) q[r++] = n->right;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 22,
      "vars": [],
      "explanation": {
        "text": "执行第23行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 23,
      "vars": [],
      "explanation": {
        "text": "执行第24行",
        "detail": "printf(\"\\n\");",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 24,
      "vars": [],
      "explanation": {
        "text": "执行第25行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 25,
      "vars": [],
      "explanation": {
        "text": "执行第26行",
        "detail": "int main() {",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 26,
      "vars": [],
      "explanation": {
        "text": "执行第27行",
        "detail": "TreeNode* root = create(1);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 27,
      "vars": [],
      "explanation": {
        "text": "执行第28行",
        "detail": "root->left = create(2); root->right = create(3);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 28,
      "vars": [],
      "explanation": {
        "text": "执行第29行",
        "detail": "root->left->left = create(4); root->left->right = create(5);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 29,
      "vars": [],
      "explanation": {
        "text": "执行第30行",
        "detail": "printf(\"中序：\"); inorder(root); printf(\"\\n\");",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 30,
      "vars": [],
      "explanation": {
        "text": "执行第31行",
        "detail": "printf(\"层序：\"); level_order(root);",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 31,
      "vars": [],
      "explanation": {
        "text": "执行第32行",
        "detail": "return 0;",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    },
    {
      "line": 32,
      "vars": [],
      "explanation": {
        "text": "执行第33行",
        "detail": "}",
        "actor": "CPU",
        "icon": "bolt",
        "color": "green"
      }
    }
  ],
  "summary": {
    "oneLiner": "学习二叉树基础",
    "pitfalls": [
      "树的遍历",
      "BST",
      "递归"
    ],
    "transferQuestion": "算法在嵌入式中如何使用？",
    "miniExercise": "实现一个栈排序算法"
  }
};
