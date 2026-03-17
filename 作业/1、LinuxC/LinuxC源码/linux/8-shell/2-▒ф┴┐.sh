#!/bin/bash

num=10
name="jack"
age=22
sex='male'

echo $num
echo "name : $name   age : $age   sex : $sex"

echo "输出命令行参数"
echo $1
echo $2
echo $3

echo "共有$#个命令行参数"
echo "所有参数：$*"

#export AA=100   #环境级变量 作用域：当前终端

#echo "export AA=100" >> ~/.profile    #用户级变量 作用域：相同用户
#source ~/.profile

#echo "export AA=100"  >> /etc/profile   #系统级变量 作用域：整个系统
#source /etc/profile

echo "打印环境变量"
echo $AA
