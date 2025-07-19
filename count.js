
function firstUniqueChar(str) {
    const freq = {};
    for (let char of str) freq[char] = (freq[char] || 0) + 1;
    console.log(freq,"sss")
    for (let char of str) if (freq[char] === 1) return char;
    return null;
}
  
console.log(firstUniqueChar(['s', 'd', 'f', 's','d','f',"z"]))

function countFreq(arr) {
    const map = {};
    arr.forEach(val => map[val] = (map[val] || 0) + 1);
    return map;
}
  
console.log(countFreq(['s','a','d','f','s']))