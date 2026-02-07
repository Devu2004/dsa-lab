
let a = 6
let b = 6
let c = 10
if(a>b && a>c){
    console.log(a);
}
else if(b>a && b>c){
    console.log(b);
}
else if(c>a && c>b){
    console.log(c);
}
else if(a==b && b==c){
    console.log('All equal');
}
else if(a==b && (a<c || b<c)){
    console.log(c);
}
else if(a==b && (a>c || b>c)){
    console.log(a);
}
else if(a==c && ((a<b || a>b) || (c<b || c>b))){
    console.log(a);
}
else if(a==c && (a>c || b>c)){
    console.log(a);
}
else if(b==c && (b<a || c<a)){
    console.log(a);
}
else if(b==c && (b>a || c>a)){
    console.log(b);
}