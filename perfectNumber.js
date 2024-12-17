function perfect(num) {
    let sum = 0
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            sum += i
        }
    }
    console.log(sum)
    // console.log(7/10)
    if (sum == num) {
        console.log("perfect")
    } else {
        console.log("not perfect")

    }
}

perfect(6)