// increament operator

// let a = 12
// console.log(++a + ++a + ++a);


// let b = 14
// console.log(++b + b++ + b++ + b++);


// let i = 11;
// i = i++ + ++i;
// console.log(i);


// let a = 11, b = 22, c;
// c = a + b + a++ + b++ + ++a + ++b;
// console.log("a=" + a);
// console.log("b=" + b);
// console.log("c=" + c);
// 11 + 22 + 11 + 22 + 13 + 24 = 103


// let i = 0;
// i = i++ - --i + ++i - i--;
// console.log(i);
// 0 - 0 + 1 - 1


// let b = true;
// b++;
// console.log(b);


// let i = 1, j = 2, k = 3;
// let m = i-- - j-- - k--;
// console.log("i=" + i);
// console.log("j=" + j);
// console.log("k=" + k);
// console.log("m=" + m);
// 1 - 2 - 3 = -4 , 0 , 1 , 2 


// let a = 1, b = 2;
// console.log(--b - ++a + ++b - --a);
// 1 - 2 + 2 - 1 = -1 + 1 = 0


// let i = 19, j = 29, k;
// k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
// console.log("i=" + i);
// console.log("j=" + j);
// console.log("k=" + k);
// 19  - 29  - 29 + 19  -> -10 - 10 = -20
// i = 19
// j = 29

// Syntax Errors and Logical Issues

// let i = 11;
// let j = --(i++);


// let m = 0, n = 0;
// let p = --m * --n * n-- * m--;
// console.log(p);
//  -1 x -1 x -1 x -1 = 1


// let a = 1;
// a = a++ + ++a * --a - a--;
// console.log(a);
// 1 + 3 x 2 - 2 = 5


// let a = 11++;
// console.log(a); -> error


// let i = 0, j = 0;
// console.log(--i * i++ * ++j * j++);
// -1 x -1 x 1 x 1 = 1