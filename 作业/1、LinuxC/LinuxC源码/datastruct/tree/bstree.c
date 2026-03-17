#include <stdio.h>
#include <stdlib.h>

typedef struct Node 
{
	int data;
	struct Node *left;
	struct Node *right;
}Node;

Node *CreateBsTree(Node *root, int num)
{
	if (NULL == root)
	{
		root = (Node *)malloc(sizeof(Node));
		root->data = num;
		root->left = NULL;
		root->right = NULL;
	}
	else
	{
		if (num > root->data)
		{
			root->right = CreateBsTree(root->right, num);
		}
		else
		{
			root->left = CreateBsTree(root->left, num);
		}
	}

	return root;
}

void MidOrderTree(Node *root)
{
	if (NULL == root)
		return;

	MidOrderTree(root->left);
	printf("%d ", root->data);
	MidOrderTree(root->right);
}

int main()
{
	int num, i;
	Node *root = NULL;

	for (i = 0; i < 10; i++)
	{
		scanf("%d", &num);

		root = CreateBsTree(root, num);
	}

	MidOrderTree(root);
	printf("\n");

	return 0;
}
