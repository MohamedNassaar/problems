function flattenObject(input) {
  const result = {};
  const stack = [{ obj: input, path: '' }];

  while (stack.length > 0) {
    const { obj, path } = stack.pop();
    console.log(obj, "sssss", path)
    for (const key in obj) {
      const fullPath = path ? `${path}.${key}` : key;
      const value = obj[key];
      console.log(fullPath, "Dddd", value)
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((item, index) => {
            const itemPath = `${fullPath}.${index}`;  
            if (typeof item === 'object' && item !== null) {
              stack.push({ obj: item, path: itemPath });
            } else {
              result[itemPath] = item;
            }
          });
        } else {
          stack.push({ obj: value, path: fullPath });
        }
      } else {
        result[fullPath] = value;
      }
    }
  }

  return result;
}
console.log(flattenObject({
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      z: {
        s: {
          w: 2
        }
      }
    },
    f: [4, 5]
  }
}));

