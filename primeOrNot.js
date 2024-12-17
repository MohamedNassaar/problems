function prime(num) {
    let count = 0
    if (num == 0 || num == 1) {
        console.log("neither prime nor composite")
    }
    else {
        for (let i = 1; i <= num; i++) {
            console.log(i,num%i)
            if (num % i == 0){
                count ++
            }
        }

        if (count == 2) {
            console.log("prime")
        }
        else {
            console.log("not prime")

        }

    }

}
prime(7)


