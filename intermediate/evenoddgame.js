let num = 101
let evennum = []
let evenSum = 0, oddSum = 0
let oddnum = []
for(let i = 1; i<=num; i++){
    if(i%2==0){
        evennum.push(i)
        evenSum +=i
    }
    else{
        oddnum.push(i)
        oddSum += i
    }
}
// console.log('Even numbers: '+ evennum);
console.log('Even numbers sum is: '+ evenSum);
// console.log('odd numbers: '+ oddnum);
console.log('odd numbers sum is: '+ oddSum);
if(evenSum>oddSum){
    console.log(`Even sum is more than odd sum! Try another number`);
}
else{
    console.log(`Odd sum is more than odd sum! Try another number`);
}
