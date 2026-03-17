#!/bin/bash

num=100
let num=num+100
echo $num

num=100
num=$[num+100]
echo $num

num=100
num=$((num+100))
echo $num

num=100
num=`expr $num + 100`
echo $num
