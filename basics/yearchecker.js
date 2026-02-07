let year = 2056
let isleap
if((year%4==0 || year%400==0)&& year%100!=0)isleap = true    
else if(year%100==0 && year%400==0) isleap = true
else isleap = false
console.log(isleap);
