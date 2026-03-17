#include <stdio.h>
#include <json-c/json.h>
#include <string.h>

int main()
{
	//创建空json对象
	struct json_object *obj = json_object_new_object();

	//往json对象添加键值对  json_object_new_string把字符串转换成json对象
	json_object_object_add(obj, "name", json_object_new_string("jack"));
	json_object_object_add(obj, "age", json_object_new_int(11));
	json_object_object_add(obj, "sex", json_object_new_string("male"));

 	//打印json对象
	printf("%s\n", json_object_to_json_string(obj));
	printf("%d\n", strlen(json_object_to_json_string(obj)));

	//解析json
	//第一步 根据键名解析出对应的json对象
	struct json_object *json;
	json_object_object_get_ex(obj, "name", &json);
	//第二步 根据json对象类型转换成对应的数据
	//先获取json对象类型
	json_type type = json_object_get_type(json);
	if (json_type_string == type)
	{
		printf("name : %s\n", json_object_get_string(json));     //json对象转换成字符串类型
	}

	json_object_object_get_ex(obj, "age", &json);
	printf("age : %d\n", json_object_get_int(json));

	json_object_object_get_ex(obj, "sex", &json);
	printf("sex : %s\n", json_object_get_string(json));

	return 0;
}
