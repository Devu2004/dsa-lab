// CI = A - P (A = amount , P = principle amount)
// A = P*(1+r/n)^(n*t) (r = intrest rate , n = per year , t = number of years)

let P = 1000
let r = 0.5
let t = 10
let n = 4
let A = P*Math.pow((1+r/n),(n*t))
let CI = A - P
console.log(CI.toFixed(2));
