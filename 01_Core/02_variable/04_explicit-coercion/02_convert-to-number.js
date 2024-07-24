// 1. Number 생성자 함수를 new 연산자 없이 호출
console.log(Number("10"));    // 10
console.log(Number("10.01")); // 10.01
console.log(Number(true));    // 1
console.log(Number(false));   // 0

console.log('========== parse 이용 ==========');
// 2. parseInt(), parseFloat() 함수 이용 (문자열 -> 숫자)
console.log(parseInt('10'));      // 10
console.log(parseFloat('10'));    // 10
console.log(parseInt('10.01'));   // 10 (소수점 날라감)
console.log(parseFloat('10.01')); // 10.01
