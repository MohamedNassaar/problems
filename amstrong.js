function amstrong(num){
    let mul=num.toString().split("");
    console.log(mul)
    let count=0,product=1;
    for(let i=0;i<mul.length;i++){
        let temp=mul.length;
        while (temp>0){
            product*=parseInt(mul[i])
            temp--
        }
        count+=product
        product=1
    }
    console.log(count)
    // let res=18890877
    // while(res>9){
    //     res/=10;
    //     console.log(parseInt(res))
    // }
    if(num==count){
        console.log(num," Amstrong")
    }else {
        console.log(num," Not Amstrong")
    }

}
amstrong(153)