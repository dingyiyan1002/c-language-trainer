#include <stdio.h>

/*
#define SUN    0
#define MON    1
#define TUE    2
*/

enum 
{
	SUN,
	MON = 11,
	TUE
};

int main()
{
	printf("%d\n", TUE);

	return 0;
}
