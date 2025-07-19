let num = 153;
// console.log(num % 10)


// console.log('🔵 Start');

// process.nextTick(() => {
//   console.log('🟡 process.nextTick');
// });

// setTimeout(() => {
//   console.log('🟠 setTimeout 2ms');
// }, 2);

// setImmediate(() => {
//   console.log('🟣 setImmediate');
// });

// const interval = setInterval(() => {
//   console.log('🔴 setInterval 1000ms');
//    clearInterval(interval); // Stop after first run
// }, 1000);

// console.log('🔵 End');

//////////////////////////////////////
console.log('🔵 Start');

process.nextTick(() => {
  console.log('🟡 process.nextTick 1');

  setTimeout(() => {
    console.log('🟠 setTimeout inside nextTick');
  }, 0);
});

setTimeout(() => {
  console.log('🟠 setTimeout 1');

  process.nextTick(() => {
    console.log('🟡 process.nextTick inside setTimeout');
  });

  setImmediate(() => {
    console.log('🟣 setImmediate inside setTimeout');
  });
}, 0);

setImmediate(() => {
  console.log('🟣 setImmediate 1');

  process.nextTick(() => {
    console.log('🟡 process.nextTick inside setImmediate');
  });

  setTimeout(() => {
    console.log('🟠 setTimeout inside setImmediate');
  }, 0);
});

const id = setInterval(() => {
  console.log('🔴 setInterval 1');
  clearInterval(id);
}, 0);

console.log('🔵 End');