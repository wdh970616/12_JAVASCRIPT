// 중첩 함수

/* 
함수 내부에 정의된 함수를 중첩 함수 또는 내부 함수라고 한다.
중첩 함수를 가지고(포함하고)있는 함수를 외부 함수라고 한다.
일반적으로 중첩 함수는 자신을 포함하는 외부 함수를 돕는 헬퍼 함수의 역할이다.
*/

function outer() {
    var outerVal = '외부함수';

    function inner() {
        var innerVal = '내부함수';
        // 내부 함수는 외부 함수의 변수를 참조할 수 있다.
        console.log(outerVal, innerVal);
    };

    // 내부 함수도 호출해야 작동함.
    inner();
};

outer();

// inner(); // inner is not defined
