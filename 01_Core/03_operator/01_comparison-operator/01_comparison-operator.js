// 비교 연산자

/* 
비교 연산자 좌향과 우향의 피연산자를 비교한 다음 그 결과를 불리언값으로 반환한다.
if문, for문과 같은 제어문의 조건식에서 주로 사용한다.

동등/일치 비교 연산자
동등비교와 일치비교는 비교하는 엄격성의 정도가 다르다.
- 동등비교 (==, !=) 연산자는 먼저 암묵적 타입변환을 통해 타입을 일치시킨후 같은값인지 비교.
- 일치비교 (===, !==) 연산자는 타입과 값이 모두 일치하는지 비교.
*/

// 숫자 1과 문자 '1', true 비교
// 동등비교
console.log(`1 == '1' : ${1 == '1'}`);
console.log(`1 == true : ${1 == true}`);
// 일치비교
console.log(`1 === '1' : ${1 === '1'}`);
console.log(`1 === true : ${1 === true}`);

console.log("\n===============================\n");

// null, undefined 비교
console.log(`null == undefined : ${null == undefined}`);   // true
console.log(`null === undefined : ${null === undefined}`); // false

console.log("\n===============================\n");

// NaN는 자기자신과 일치하지 않는 유일한 값
console.log(`NaN == NaN : ${NaN == NaN}`);   // false
console.log(`NaN === NaN : ${NaN === NaN}`); // false

// Number.isNaN() 메소드를 사용해서 확인해야한다.
console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`); // true

console.log("\n===============================\n");

// 비교 연산자를 통해 문자열끼리도 비교 가능, 유니코드 순으로 비교한다.
// 대소비교 연산자
console.log(`'apple' < 'banana' : ${'apple' < 'banana'}`); // true
console.log(`'apple' > 'banana' : ${'apple' > 'banana'}`); // false
console.log(`'cat' < 'Zoo' : ${'cat' < 'Zoo'}`);           // false
console.log(`'cat' > 'Zoo' : ${'cat' > 'Zoo'}`);           // true // 대문자가 소문자보다 작다
