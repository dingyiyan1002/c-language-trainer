#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
	int data;
	struct Node *left;
	struct Node *right;
}Node;

Node *CreateTree(int *a, int size)
{
	if (NULL == a)
		return NULL;

	Node *arr[11] = {0};
	int i;

	for (i = 0; i < size; i++)
	{
		arr[i] = (Node *)malloc(sizeof(Node) * 1);
		if (NULL == arr[i])
		{
			printf("malloc failure\n");
			return NULL;
		}

		arr[i]->data = a[i];
		arr[i]->left = NULL;
		arr[i]->right = NULL;
	}

	for (i = 0; i < size / 2; i++)
	{
		arr[i]->left = arr[2 * i + 1];
		arr[i]->right = arr[2 * i + 2];
	}

	return arr[0];
}

void PreOrderTree(Node *root)
{
	if (NULL == root)
		return;

	printf("%d ", root->data);
	PreOrderTree(root->left);
	PreOrderTree(root->right);
}

void MidOrderTree(Node *root)
{
	if (NULL == root)
		return;

	MidOrderTree(root->left);
	printf("%d ", root->data);
	MidOrderTree(root->right);
}

void PostOrderTree(Node *root)
{
	if (NULL == root)
		return;

	PostOrderTree(root->left);
	PostOrderTree(root->right);
	printf("%d ", root->data);
}

int main()
{
	int num[10] = {0};
	int i;

	for (i = 0; i < 10; i++)
	{
		scanf("%d", &num[i]);
	}

	Node *root = CreateTree(num, 10);

	//先序遍历
	PreOrderTree(root);
	printf("\n");

	//中序遍历
	MidOrderTree(root);
	printf("\n");

	//后续遍历
	PostOrderTree(root);
	printf("\n");

	return 0;
}
