// swap of 2 numbers 

// 1. method - using third variable

let a = 12
let b = 11
console.log(a,b);
let temp = a
a = b
b = temp
console.log(a,b);

// 2. within 2 variable via calculation

let num1 = 20
let num2 = 34
console.log(num1,num2)
num1 = num1+num2
num2 = num1-num2
num1 = num1-num2
console.log(num1,num2);

// 3. destructring

let x = 12;
let y = 10;
console.log(x,y);
[x,y] = [y,x]
console.log(x,y);
