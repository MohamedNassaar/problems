function palindrome (num){
   let  rev=0,temp=num;
//    console.log(parseInt(num%10))
    while (num>0){
        rev=parseInt(rev*10+num%10);
        console.log(rev,'rev')
        num=parseInt(num/10);
        console.log(num,'num')
    }
    
    if (temp==rev){
        console.log("palindrome")
    }
    else{
        console.log("not palindrome")    
    }
}

palindrome(121)