// 1,2,3,5,7,11,13
function isPrime(n){
    if(n<= 1) return false
    if(n==2) return true
    if(n%2==0) return false
    for(let i = 3; i<=Math.floor(Math.sqrt(n/2)); i+=2){
        if(n%i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(13));
