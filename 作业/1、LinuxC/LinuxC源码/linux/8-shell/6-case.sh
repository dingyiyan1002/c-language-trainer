#!/bin/bash

read num
case $num in
	[a-z])
		echo "小写字母";;
	[A-Z])
		echo "大写字母";;
	[0-9])
		echo "数字";;
	*)
		echo "未知";;
esac
