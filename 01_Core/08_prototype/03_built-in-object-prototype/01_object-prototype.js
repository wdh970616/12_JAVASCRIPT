// const obj = new Object();

const obj = {};

console.log(obj.__proto__ === Object.prototype);

console.log(obj.toString === obj.__proto__.toString); // true
console.log(obj.toString === Object.prototype.toString); // true