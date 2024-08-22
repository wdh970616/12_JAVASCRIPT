let student = {
    name : 'seongmin',
    age : 28,
}

let student2 = {
    name : 'seongmin',
    age : 28,
}

// Constructor
// 이름 첫번째에 대문자를 사용하는 것이 관례(일반함수와 구분)
// function Student() {
//     this.name = 'seongmin';
//     this.age = 28;
// }

// 생성자 사용법
// let cStudent1 = new Student();

function Student(name, age) {
    this.name = name;
    this.age = age;
}

let cStudent1 = new Student('성민', 28);
let cStudent2 = new Student('성준', 23);

console.log(cStudent1);
console.log(cStudent2);

// 프로토타입
console.log(Student.prototype);

Student.prototype.gender = '남';

let cStudent3 = new Student('경찬', 24);

console.log(cStudent3);
console.log(cStudent3.gender);
console.log(cStudent3.__proto__);