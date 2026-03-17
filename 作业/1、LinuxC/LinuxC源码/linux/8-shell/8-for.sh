#!/bin/bash

for ((i=0;i<5;i++))
do
	mkdir $i
	cd $i
	echo "this is $i" > $i
	cd ..
done

for i in 0 1 2 3 4
do
	cd $i
	echo "hello $i" > $i
	cd ..
done
