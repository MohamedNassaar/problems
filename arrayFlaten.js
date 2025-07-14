function flattenArray(input) {
    const stack = [...input];  // Clone input to avoid mutation
    console.log(...input)
    const result = [];
  
    while (stack.length > 0) {
      const value = stack.pop();
    //   console.log(value,"sss",result,"ddd",stack)
  
      if (Array.isArray(value)) {
        // console.log(...value)
        // Push all elements back to stack (in reverse order)
        stack.push(...value);
        
      } else {
        result.unshift(value); // Maintain correct order
      }
    }
  
    return result;
  }
  console.log(flattenArray([1, [2, [3, [4]], 5]]));  // Output: [1, 2, 3, 4, 5]