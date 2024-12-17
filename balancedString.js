function balancedString(str) {
    str = str.split("");
    let stack = []
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] == '{' ) {
    //         stack.push(str[i]);
    //         if(str[str.length-i]=='}'){
    //             stack.pop()
    //         }
    //     }
    //     if ( str[i] == '[' ) {
    //         stack.push(str[i]);
    //         if(str[str.length-i]==']'){
    //             stack.pop()
    //         }
    //     }
    //     if ( str[i] == '(') {
    //         stack.push(str[i]);
    //         if(str[str.length-i]==')'){
    //             stack.pop()
    //         }
    //     }
    // }

    if (str.length % 2 != 0) {
        console.log('NOss')
        return 'NO'
    }
    for (let i = 0; i < str.length; i++) {

        if (str[i] == '{') {
            stack.push(str[i]);
            for (let j = str.length - 1; j >= 0; j--) {
                if (str[j] == '}' && str.indexOf(str[i]) < str.indexOf(str[j])) {
                for (let z=str.indexOf(str[i]);i<=str.indexOf(str[j]);z++){
                    console.log(str[z],'lll')
                }
                    str.splice(str.indexOf(str[j]), 1);
                    stack.pop()
                    break
                }
            }
        }

        if (str[i] == '(') {
            stack.push(str[i]);
            // console.log(stack, i);
            // if(str[i]>str[str.length-1-i])
            for (let j = str.length - 1; j >= 0; j--) {
                if (str[j] == ')' && str.indexOf(str[i]) < str.indexOf(str[j])) {
                    str.splice(str.indexOf(str[j]), 1);
                    stack.pop()
                    break
                }
            }
            // console.log(stack, i)
        }

        if (str[i] == '[') {
            stack.push(str[i]);
            for (let j = str.length - 1; j >= 0; j--) {
                if (str[j] == ']' && str.indexOf(str[i]) < str.indexOf(str[j])) {
                    str.splice(str.indexOf(str[j]), 1);
                    stack.pop()
                    break
                }
            }
        }
    }
    console.log(stack, str);
    let finds = str.findIndex(data => data == '}' || data == ']' || data == ')');
   
    if (stack.length == 0 && finds == -1) {
        console.log('YES')
    } else {
        console.log('NO')
    }
    
}
balancedString('{[(])}')