let arr = [{ id: 1, name: "nassaar" },
    { id: 2, name: "assar" },
    { id: 3, name: "kasim" },
    { id: 1, name: "manoj" },
    { id: 2, name: "segar" }]

let tArr = []
let nArr = []
arr.forEach(data => {

    if (!tArr.includes(data.id)) {
        tArr.push(data.id)
        nArr.push(data)
    }
})
console.log(tArr, nArr)