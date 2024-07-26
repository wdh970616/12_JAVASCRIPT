/* 
배열 고차함수
* 고차함수 : 함수를 인수로 전달받거나 함수를 반환하는 함수
*/

// Array.prototype.sort : 배열을 정렬 기준으로 정렬
let numbers = [];
for (let i = 0; i < 10; i++) {
    // 1 ~ 100 사이의 랜덤한 정수를 numbers 배열에 담아줌
    numbers[i] = Math.floor(Math.random() * 100) + 1;
}
console.log(`정렬전 numbers : ${numbers}`);
// 배열이 기본적으로 문자열 정렬이 되므로 한자리수, 세자리수 숫자가 올바르게 정렬되지 않음
console.log(`정렬후 numbers : ${numbers.sort()}`);

// 오름차순
console.log('=================== 오름차순 ===================');
function compare(a, b) {
    if (a > b) return 1; // a를 b보다 뒤에 위치시킴
    if (a == b) return 0; // a를 b의 순서를 변경하지 않음
    if (a < b) return -1; // a를 b보다 앞에 위치시킴
}
numbers.sort(compare);
console.log(`compare 정렬후 numbers : ${numbers.sort(compare)}`);

console.log('=================== 내림차순 ===================');
numbers.sort((a, b) => b - a);
console.log(`내림차순 정렬후 numbers : ${numbers}`);

// Arrays.prototype.forEach : for을 대채할 수 있는 고차함수

/* 
함수형 프로그래밍
순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여
복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임
*/

numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     하나하나 꺼내는 출력
// }

/* 
배열.forEach(function(item, index, array) {
    배열의 각 요소에 실행할 기능 작성
})
*/

console.log('=================== forEach ===================');
numbers.forEach(function (item, index, array) {
    console.log(`item : ${item}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
})

// 각 요소별로 * 10 한 값을 출력
numbers.forEach(item => console.log(item * 10))

// Array.prototype.map : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환값들로 구성된 새로운 배열 반환
console.log('=================== map ===================');
const types = [true, 1, 'text'].map(item => typeof item);
console.log(`types : ${types}`);
const length = ['apple', 'banana', 'cat', 'egg'].map(item => item.length);
console.log(`length : ${length}`);

// Array.prototype.filter : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환값이 true로 구성된 새로운 배열 반환
console.log('=================== filter ===================');
const odds = numbers.filter(item => item % 2); // 짝수 판별
const even = numbers.filter(item => item % 2 === 0);
console.log(odds);
console.log(even);

// Array.prototype.some : 배열 내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인(Boolean 반환)
console.log('=================== some ===================');
result = [1, 5, 3, 2, 4].some(item => item > 10); // 10보다 큰 수가 배열내에 존재하는가?
console.log(result); // false
result = [1, 5, 3, 2, 4].some(item => item > 3); // 3보다 큰 수가 배열내에 존재하는가?
console.log(result); // true
// egg가 존재하는지 확인하는 코드
arr1 = ['apple', 'banana', 'cat', 'dog']
result = arr1.some(item => item === 'egg');
console.log(result); // false

// Array.prototype.every : 배열 내 모든 요소가 콜백 함수의 테스트를 통과하는지 확인(Boolean 반환)
console.log('=================== every ===================');
result = [1, 5, 3, 2, 4].every(item => item > 3); // 모든 요소가 3보다 큰 수인가?
console.log(result); // false
result = [1, 5, 3, 2, 4].every(item => item > 0); // 모든 요소가 0보다 큰 수인가?
console.log(result); // true

// Array.prototype.find : 배열을 순회하며 각 요소에 대해 인자로 주어진 콜백 함수를 실행하고 그 결과가 참인 첫번째 요소를 반환(없으면 undefined 반환)
// Array.prototype.findIndex : 배열을 순회하며 각 요소에 대해 인자로 주어진 콜백 함수를 실행하고 그 결과가 참인 요소의 인덱스를 반환(없으면 -1 반환)
console.log('=================== find ===================');
const students = [
    { name: '유관순', score: 90 },
    { name: '홍길동', score: 80 },
    { name: '장보고', score: 70 },
    { name: '유관순', score: 60 },
];
result = students.find(item => item.name === '유관순');
console.log(result);
result = students.findIndex(item => item.name === '유관순');
console.log(result);
result = students.find(item => item.name === '신사임당');
console.log(result); // undefined
result = students.findIndex(item => item.name === '신사임당');
console.log(result); // -1
// find, findIndex : 일치하는 요소를 찾으면 더이상 탐색하지않음 -> 하나의 요소, 하나의 인덱스만 반환함
// 60점 이상의 학생들을 전부 알고싶으면? filter -> 콜백 함수의 결과가 true인 배열 요소값만 추출해서 배열로 반환
console.log('=================== filter, find 비교 ===================');
result = students.find(item => item.score >= 80);
console.log(result);
result = students.filter(item => item.score >= 80);
console.log(result);