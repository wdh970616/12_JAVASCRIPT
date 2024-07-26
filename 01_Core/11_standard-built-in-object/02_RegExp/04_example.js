// 1. http:// 또는 https:// 로 시작하는지 검사
const url = 'https://www.google.com';
console.log(`http:// 또는 https:// 로 시작하는지 검사 : ${/^https?:\/\//.test(url)}`);

// 2. 파일명을 통해 자바스크립트 확장자인지 검사하세요
const fileName = 'test.js';
console.log(`파일명을 통해 자바스크립트 확장자인지 검사하세요 : ${/js$/.test(fileName)}`);

// 3. 아이디로 사용 가능한지 검사
// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 6 ~ 12 자리
const id = 'hello123';
console.log(`아이디로 사용 가능한지 검사 : ${/^[0-9a-zA-Z]{6,12}$/.test(id)}`);

// 4. 핸드폰 번호 형식에 맞는지 검사
// 형식 : 010-xxxx-xxxx
// x : 숫자
function phoneTest(phone) {
    return `핸드폰 번호 형식에 맞는지 검사 : ${/^\d{3}-\d{4}-\d{4}$/.test(phone)}`;
}
console.log(phoneTest('010-9283-3728'));