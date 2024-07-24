// in 연산자
// 프로퍼티 존재 여부 확인

var student = {
    name: '유관순',
    age: 16,
    test: undefined,
};

console.log(student.height === undefined); // 존재하지 않아서 true
console.log(student.name === undefined);   // 존재하기 때문에 false
console.log(student.test === undefined);   // true?

// test 프로퍼티는 존재하긴 하지만 undefined 값이라 true라고 나온다. => 존재하지 않는다고 판별하는 문제 발생
// 이 문제를 해결하는 in 연산자
console.log('name' in student);   // true
console.log('height' in student); // false
console.log('test' in student);   // true
