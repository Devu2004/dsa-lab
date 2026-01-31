let a = 10
let b = 5
let c = 2


if (a+b<=c || b+c<= a || a+c<= b){
        console.log('not possible');
    }
    else{
        let s = (a+b+c)/2
        console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2));
    }
