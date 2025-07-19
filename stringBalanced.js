// function stringBalanced(str) {
//     str = str.split("");
//     let stack = []
//     console.log(str.length)

//     // for (let i = 0; i < str.length; i++) {
//     //     if (str[i] == '{') {
//     //         stack.push(str[i]);
//     //         if (str[str.length - 1 - i] == '}' && str.indexOf(str[i]) < str.indexOf(str[str.length - 1 - i])) {
//     //             stack.pop()
//     //         }
//     //     }
//     //     if (str[i] == '(') {
//     //         stack.push(str[i]);
//     //         console.log(stack, i);
//     //         // if(str[i]>str[str.length-1-i])
//     // if (str[str.length - 1 - i] == ')' && str.indexOf(str[i]) < str.indexOf(str[str.length - 1 - i])) {
//     //     stack.pop()
//     // }
//     //         console.log(stack, i)
//     //     }
//     //     if (str[i] == '[') {
//     //         stack.push(str[i]);
//     //         if (str[str.length - 1 - i] == ']' && str.indexOf(str[i]) < str.indexOf(str[str.length - 1 - i])) {
//     //             stack.pop()
//     //         }
//     //     }
//     // }

//     if (str.length % 2 != 0) {
//         console.log('NOss')
//         return 'NO'
//     }

//     for (let i = 0; i < str.length; i++) {

//         if (str[i] == '{') {
//             stack.push(str[i]);
//             if (str[str.length - 1 - i] == '}' && str.indexOf(str[i]) <= str.indexOf(str[str.length - 1 - i])) {
//                 stack.pop()
//                 str[str.length - 1 - i] = 'm'
//             } else {
//                 for (let j = str.length - 1; j >= 0; j--) {
//                     if (str[j] == '}' && str.indexOf(str[i]) <= str.indexOf(str[j])) {
//                         // let count = 0;
//                         // let val1 = false
//                         // for (let z = i; z <= j; z++) {
//                         //     console.log(str[j], z, str[z], j)
//                         //     count++
//                         //     if (val1 == true && str[z] == '}') {
//                         //         val1=false
//                         //         continue
//                         //     }
//                         //     if (str[z + 1] == '{') {
//                         //         val1 = true
//                         //     } else if (str[z] == '}') {
//                         //         break
//                         //     }
//                         // }
//                         // console.log(count, 'cc', stack, str)
//                         // if (count % 2 != 0) {
//                         //     console.log('NO');
//                         //     return 'NO';
//                         // }
//                         // str.splice(str.indexOf(str[j]), 1);
//                         str[j] = 'm'
//                         stack.pop()
//                         break
//                     }
//                 }
//             }

//         }
//         if (str[i] == '(') {
//             stack.push(str[i]);
//             // console.log(stack, i);
//             // if(str[i]>str[str.length-1-i])
//             if (str[str.length - 1 - i] == ')' && str.indexOf(str[i]) <= str.indexOf(str[str.length - 1 - i])) {
//                 stack.pop()
//                 str[str.length - 1 - i] = 'm'
//             } else {
//                 for (let j = str.length - 1; j >= 0; j--) {
//                     if (str[j] == ')' && str.indexOf(str[i]) <= str.indexOf(str[j])) {
//                         // let count = 0;
//                         // let val1 = false
//                         // for (let z = i; z <= j; z++) {
//                         //     console.log(str[j], z, str[z], j)
//                         //     count++
//                         //     if (val1 == true && str[z] == ')') {
//                         //         val1=false
//                         //         continue
//                         //     }
//                         //     if (str[z + 1] == '(') {
//                         //         val1 = true
//                         //     } else if (str[z] == ')') {
//                         //         break
//                         //     }
//                         // }
//                         // console.log(count, 'cc', stack, str)
//                         // if (count % 2 != 0) {
//                         //     console.log('NO');
//                         //     return 'NO';
//                         // }
//                         // str.splice(str.indexOf(str[j]), 1);
//                         str[j] = 'm'
//                         stack.pop()
//                         break
//                     }
//                 }
//             }

//             // console.log(stack, i)
//         }
//         if (str[i] == '[') {
//             stack.push(str[i]);
//             if (str[str.length - 1 - i] == ']' && str.indexOf(str[i]) <= str.indexOf(str[str.length - 1 - i])) {
//                 stack.pop()
//                 str[str.length - 1 - i] = 'm'
//             } else {
//                 for (let j = str.length - 1; j >= 0; j--) {
//                     if (str[j] == ']' && str.indexOf(str[i]) <= str.indexOf(str[j])) {
//                         // let count = 0;
//                         // let val1 = false
//                         // for (let z = i; z <= j; z++) {
//                         //     console.log(str[j], z, str[z], j)
//                         //     count++
//                         //     if (val1 == true && str[z] == ']') {
//                         //         val1=false
//                         //         continue
//                         //     }
//                         //     if (str[z + 1] == '[') {
//                         //         val1 = true
//                         //     } else if (str[z] == ']') {
//                         //         break
//                         //     }

//                         // }
//                         // console.log(count, 'cc', stack, str)
//                         // if (count % 2 != 0) {
//                         //     console.log('NO');
//                         //     return 'NO';
//                         // }
//                         // str.splice(str.indexOf(str[j]), 1);
//                         str[j] = 'm'
//                         stack.pop()
//                         break
//                     }
//                 }
//             }
//         }
//     }

//     //  for (let i = 0; i < str.length; i++) {

//     //     if (str[i] == '{') {
//     //         stack.push(str[i]);

//     //         for (let j = i; j< str.length; j++) {
//     //             if (str[j] == '}' && str.indexOf(str[i]) <= str.indexOf(str[j])) {

//     //                 let count = 0;
//     //                 let sig=false
//     //                 for (let z = i; z <= j; z++) {
//     //                     console.log(str[j],z,str[z],j)
//     //                     count++
//     //                 }
//     //                 if (count % 2 != 0) {
//     //                     console.log('NO',count);
//     //                     return 'NO';
//     //                 }
//     //                 // str.splice(str.indexOf(str[j]), 1);
//     //                 str[j]='m'
//     //                 stack.pop()
//     //                 break
//     //             }
//     //         }
//     //     }
//     //     if (str[i] == '(') {
//     //         stack.push(str[i]);
//     //         // console.log(stack, i);
//     //         // if(str[i]>str[str.length-1-i])
//     //         for (let j = i; j< str.length; j++) {
//     //             if (str[j] == ')' && str.indexOf(str[i]) <= str.indexOf(str[j])) {
//     //                 let count = 0
//     //                 for (let z = i; z <= j; z++) {
//     //                     console.log(str[j],z,str[z],j)
//     //                     count++
//     //                 }
//     //                 if (count % 2 != 0) {
//     //                     console.log('NO');
//     //                     return 'NO';
//     //                 }
//     //                 // str.splice(str.indexOf(str[j]), 1);
//     //                 str[j]='m'
//     //                 stack.pop()
//     //                 break
//     //             }
//     //         }
//     //         // console.log(stack, i)
//     //     }
//     //     if (str[i] == '[') {
//     //         stack.push(str[i]);
//     //         for (let j = i; j< str.length; j++) {
//     //             if (str[j] == ']' && str.indexOf(str[i]) <= str.indexOf(str[j])) {
//     //                 let count = 0
//     //                 for (let z = i; z <= j; z++) {
//     //                     console.log(str[j],z,str[z],j)
//     //                     count++
//     //                 }
//     //                 if (count % 2 != 0) {
//     //                     console.log('NO');
//     //                     return 'NO';
//     //                 }
//     //                 // str.splice(str.indexOf(str[j]), 1);
//     //                 str[j]='m'
//     //                 stack.pop()
//     //                 break
//     //             }
//     //         }
//     //     }
//     // }

//     console.log(stack, str);
//     let finds = str.findIndex(data => data == '}' || data == ']' || data == ')');

//     if (stack.length == 0 && finds == -1) {
//         console.log('YES');
//         return 'YES';
//     } else {
//         console.log('NO');
//         return 'NO';
//     }
// }
// stringBalanced('{[(])}')
// // stringBalanced('{(([])[])[]}')
// // stringBalanced('{[](){([])}}')
// // stringBalanced('{{)[](}}')

function areBracketsBalanced(expr) {

    // Using ArrayDeque is faster 
    // than using Stack class 
    let stack = [];

    // Traversing the Expression 
    for (let i = 0; i < expr.length; i++) {
        let x = expr[i];

        if (x == '(' || x == '[' || x == '{') {
            // Push the element in the stack 
            stack.push(x);
            continue;
        }
        // If current character is not opening 
        // bracket, then it must be closing.
        // So stack cannot be empty at this point. 
        console.log(stack,i)
        if (stack.length == 0)
            return false;

        let check;
        switch (x) {
            case ')':
                check = stack.pop();
                console.log(check,1)
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                console.log(check,2)
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                console.log(check,3)
                if (check == '(' || check == '{')
                    return false;
                break;

        }
        
    }

    // Check Empty Stack 
    return (stack.length == 0);
}

// Driver code 
let expr = "[{{}}]()";

// Function call 
if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced "); 