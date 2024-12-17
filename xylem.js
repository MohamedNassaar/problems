function xylem (num){
let sum=0,last=num%10
num=parseInt(num/10);
while(num>9){
    sum+=num%10;
    num=parseInt(num/10)
}
let f1=num+last
if(f1==sum){
    console.log('xylem')
}else {
    console.log('not xylem')
}
}
xylem(34326)