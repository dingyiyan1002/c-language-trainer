#!/bin/bash

num=$1

if [ -z $num ]; then        #长度为0则成立
	echo "请输入参数"
	exit
fi


if [ $num -eq 100 ]; then   #判断相等
	echo "等于100"
elif [ $num -gt 100 ]; then
	echo "大于100"
elif [ $num -lt 100 ]; then
	echo "小于100"
fi
