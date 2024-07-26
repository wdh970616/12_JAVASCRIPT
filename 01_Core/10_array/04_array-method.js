// 배열 메소드
const arr = [];

// 배열의 생성자함수 = Array
console.log(arr.constructor === Array);

// 배열의 프로토타입 객체 = Array.prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype);

/* 
Array.prototype.indexOf
- indexOf : 배열에서 요소가 위치한 인덱스를 리턴
- lastIndexOf : 배열의 요소가 위치한 마지막 인덱스를 리턴
- includes : 배열에 해당 요소 포함 여부 관련
*/

const foodList = ['물회', '삼계탕', '냉면', '수박', '물회'];

console.log('=================== indexOf ===================');
console.log(`foodList.indexOf('물회') : ${foodList.indexOf('물회')}`); // 0
console.log(`foodList.indexOf('물회', 1) : ${foodList.indexOf('물회', 1)}`); // 4 : 중복값중 두번째 위치 반환
console.log(`foodList.indexOf('삼겹살') : ${foodList.indexOf('삼겹살')}`); // -1

console.log('=================== lastIndexOf ===================');
console.log(`foodList.lastIndexOf('물회') : ${foodList.lastIndexOf('물회')}`); // 4
console.log(`foodList.lastIndexOf('물회', 1) : ${foodList.lastIndexOf('물회', 1)}`); // 0
console.log(`foodList.lastIndexOf('삼겹살') : ${foodList.lastIndexOf('삼겹살')}`); // -1

console.log('=================== includes ===================');
console.log(`foodList.includes('물회') : ${foodList.includes('물회')}`); // true
console.log(`foodList.includes('삼겹살') : ${foodList.includes('삼겹살')}`); // false

/* 
Array.prototype.push : 배열의 맨 뒤에 요소를 추가
Array.prototype.pop : 배열의 맨 뒤에 요소를 제거
*/

const chineseFoods = ['짜장면', '짬뽕', '우동'];

console.log('=================== push ===================');
console.log(`push 전 chineseFood : ${chineseFoods}`);

// chineseFoods.push('탕수육');
// chineseFoods.push('양장피');
chineseFoods.push('탕수육', '양장피');
console.log(`push 후 chineseFood : ${chineseFoods}`);

console.log('=================== pop ===================');
console.log(`chineseFoods.pop() : ${chineseFoods.pop()}`);
console.log(`chineseFoods.pop() : ${chineseFoods.pop()}`);
console.log(`chineseFoods.pop() : ${chineseFoods.pop()}`);
console.log(`pop 후 chineseFood : ${chineseFoods}`);

// Array.prototype.unshift : 배열의 맨 앞에 요소 추가
// Array.prototype.shift : 배열 맨 앞의 요소 제거 후 반환

const chickenList = ['양념치킨', '후라이드', '파닭'];

console.log('=================== unshift ===================');
console.log(`unshift 전 chickenList : ${chickenList}`);
chickenList.unshift('간장치킨');
chickenList.unshift('마늘치킨');
console.log(`unshift 후 chickenList : ${chickenList}`);
console.log('=================== shift ===================');
console.log(`chickenList.shift() : ${chickenList.shift()}`);
console.log(`chickenList.shift() : ${chickenList.shift()}`);
console.log(`chickenList.shift() : ${chickenList.shift()}`);
console.log(`shift 후 chickenList : ${chickenList}`);

// Array.prototype.concat : 두개 이상의 배열을 결합
console.log('=================== concat ===================');
const idol1 = ['아이브', '오마이걸'];
const idol2 = ['트와이스', '레드벨벳'];
const idol3 = ['블랙핑크', '에스파'];
// 배열명.concat(배열명1, 배열명2, ...)
const mix = idol1.concat(idol2); // idol1 기준으로 합쳐짐
const mix2 = idol3.concat(idol1, idol2); // idol3 기준으로 합쳐짐
console.log(`${mix}`);
console.log(`${mix2}`);

// Array.prototype.slice : 배열의 요소 선택하여 잘라내기
console.log('=================== slice ===================');
const front = ['HTML', 'CSS', 'JavaScript', 'jQuery'];
// slice(시작인덱스, 종료인덱스)
console.log(`front.slice(1, 3) : ${front.slice(1, 3)}`);
console.log(`front : ${front}`);

// Arrays.prototype.join : 배열을 구분자로 결합하여 몬자열로 반환
console.log('=================== join ===================');
const snackList = ['사탕', '초콜릿', '껌', '과자']
console.log(`snack.List.join() : ${snackList.join()}`); // 구분자 ,
console.log(`snack.List.join(/) : ${snackList.join("/")}`); // 구분자 /

// Arrays.prototype.reverse : 배열의 순서를 뒤집음
console.log('=================== reverse ===================');
console.log(`[1, 2, 3, 4, 5].reverse() : ${[1, 2, 3, 4, 5].reverse()}`);