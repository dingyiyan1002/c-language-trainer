#include <stdio.h>
#include <json-c/json.h>
#include <string.h>

int main()
{
	const char *str = "{\"name\":\"jack\",\"age\":22,\"sex\":\"male\"}";

	//把符合json格式的字符串转换成json对象
	struct json_object *obj = json_tokener_parse(str);

	//把json对象转换成字符串输出
	printf("%s\n", json_object_to_json_string(obj));

	return 0;
}
