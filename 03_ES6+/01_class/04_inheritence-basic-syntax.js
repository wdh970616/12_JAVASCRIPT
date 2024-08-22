// 클래스 상속

class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    // 먹으면 살찌는 메소드
    eat(foodWeight) {
        this.weight += foodWeight;
        console.log(`${this.name} 은(는) ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
    } 

    // 움직여서 살빼는 메소드
    move(lostWeight) {
        if (this.weight > lostWeight) this.weight -= lostWeight;
        console.log(`${this.name} 은(는) 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`);
    }
}

let animal = new Animal("구찌", 10);
animal.eat(1);
animal.move(0.5);

class Human extends Animal {
    develop(language) {
        console.log(`${this.name} 은(는) ${language}로 개발을 합니다. 정말 즐겁겠군요~`);
    }
}

let human = new Human('성민', 90);
human.eat(1);
human.move(3);
human.develop("JavaScript");