/* 
undefined 타입
undefined 타입의 값은 -> undefined가 유일하다.
var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화된다.
따라서 선언 이후 값을 할당하지 않으면 undefined가 반환된다.
*/

var undef;
console.log(undef);

/* 
null 타입
null 타입의 값은 -> null이 유일하다.
변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다.
*/

var nullVal = 'something';
nullVal = null;

console.log(nullVal);
