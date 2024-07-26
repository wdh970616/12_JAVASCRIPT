// 에러 상황

// 1. 암묵적 전역
(function () {
    'use strict';

    // x = 1; // 선언하지 않은 변수를 참조하면 에러가 발생한다.
    // console.log(x);
}());

// 2. 변수, 함수, 매개변수의 삭제
(function () {
    'use strict'
    var x = 1;
    // delete x; // strict 모드에서는 식별자를 삭제할 수 없다.
}());

// 3. 매개변수 이름의 중복
(function () {
    'use strict'
    // function test(x, x) {
    //     return x - x;
    // }
    // console.log(test(1, 2));
}());

// 4. with문의 사용
(function () {
    'use strict'
    // with문 : 전달된 객체를 스코프체인에 추가
    // 객체 이름을 생략할 수 있어서 코드가 간단해지는 효과가 있다.
    // 가독성이 나빠서 사용하지 않는 것이 좋다.
    with ({ x: 1 }) {
        console.log(x);
    }
});