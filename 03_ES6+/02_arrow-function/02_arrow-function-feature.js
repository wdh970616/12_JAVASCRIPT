// 화살표함수의 특징

// 1. 화살표함수는 this를 가지지않는다.
// => 화살표함수는 화살표함수가 있는 위치의 this를 가져온다.

let theater = {
    store : '강남점',
    titles : ['데드풀과 울버린', '사랑의 하츄핑', '파일럿', '인사이드아웃2'],

    showMovieList() {
        this.titles.forEach (
            title => console.log(this.store + " : " + title)
        );
    }

    // showMovieList() {
    //     this.titles.forEach(
    //         function(title) {
    //             console.log(this.store + " : " + title);
    //         }
    //     );
    // }
}

theater.showMovieList();

// 2. 화살표함수는 new와 함께 호출할 수 없다.
// this가 없기 때문에 생성자 함수로 사용할 수 없다.
let arrowFunc = () => {}
let normalFunc = function() {}
// new arrowFunc; // arrowFunc is not a constructor 에러발생
new normalFunc(); // 에러 발생하지 않음

// 생성자 함수로 사용할 수 없다 = 객체 생성이 불가능 = prototype 프로퍼티가 없다 = Prototype 생성하지 않음
console.log(arrowFunc.hasOwnProperty('prototype')); // false
console.log(normalFunc.hasOwnProperty('prototype')); // true

// 3. 화살표함수는 super를 가지지 않는다.

// 이러한 특징들로 인해 화살표함수는 다른 함수의 인수로 전달되어 콜백함수로 사용되는 경우가 많다.