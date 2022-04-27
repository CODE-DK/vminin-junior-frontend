const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound: function () {
    return "Гав-Гав";
  },
};

const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound: function () {
    return "Чик-чирик";
  },
};

function makeDomestic(isDomectic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    this.isDomectic = isDomectic;
    return this;
}

const newBird = makeDomestic.call(bird, false);
const newDog = makeDomestic.call(dog, true);

// apply: 
// makeDomestic.apply(bird, [false]);
// makeDomestic.apply(dog, [true]);

// bind:
// makeDomestic.bind(bird, false)();
// makeDomestic.bind(dog, true)();

console.log('newBird', newBird);
console.log('newDog', newDog);