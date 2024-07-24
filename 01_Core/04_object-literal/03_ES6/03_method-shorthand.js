// 메소드 단축

var dog = {
    name: '구찌',
    eat: function (food) {
        console.log(`${this.name}은(는) ${food}을(를) 맛있게 먹어요.`);
    },
};
dog.eat('고구마');

var dog2 = {
    name: '구찌',

    // 메소드 축약표현
    eat(food) {
        console.log(`${this.name}은(는) ${food}을(를) 맛있게 먹어요.`);
    },
};
dog2.eat('고구마');
