#!/bin/bash

array1=(1 2 3 4 5)
array2=('a' 'b' 'c' 'd' 'e')
array3=("1111" "2222" "3333")

echo ${array1[0]}
echo ${array2[0]}
echo ${array3[0]}

echo ${array3[@]}    #访问所有元素
echo ${#array1[@]}   #打印数组元素个数
echo ${!array1[@]}   #打印所有的下标
echo ${array1[@]:1}  #从第二个元素开始打印
echo ${array1[@]:1:2} 

#关联数组
echo "**************"

declare -A array4
declare -A array5

array4[name]="jack"
array4[age]=22
array4[sex]="male"

array5=([name]="tom" [age]=23 [sex]="male")

echo ${array4[@]}
echo ${array5[@]}

