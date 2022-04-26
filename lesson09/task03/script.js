// ---

const coffees = ["Latte", "Cappuccino", "Americano"];
const coffeeName = prompt("Поиск кофе по названию:").trim();

const coffeeIndex = coffees.findIndex(
  (coffee) => coffee.toLowerCase() === coffeeName.toLowerCase(),
);
if (coffeeIndex !== -1) {
  alert(`
    Держите ваш любимый кофе ${coffees[coffeeIndex]}. 
    Он ${coffeeIndex + 1}-й по популярности в нашей кофейне.
  `);
} else {
  alert("К сожалению, такого вида кофе нет в наличии");
}

// ---
