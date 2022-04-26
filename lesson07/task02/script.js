let temperatureInCelsius = prompt("Введите температуру в градусах Цельсия");
console.log("Temperature in Celsius: ", temperatureInCelsius);

if (!isDigits(temperatureInCelsius)) {
  alert("Должно быть числом! Может содержать ','");
} else {
  temperatureInCelsius = +temperatureInCelsius;
  if (temperatureInCelsius === 0) {
    alert("0 градусов по Цельсию - это температура замерзания воды");
  } else if (temperatureInCelsius > 0) {
    alert(
      "Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже",
    );
  }

  const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32;
  console.log("Temperature in Fahrenheit: ", temperatureInFahrenheit);
  alert(`
        ${temperatureInCelsius} градусов по Цельсию - 
        это ${temperatureInFahrenheit} по Фаренгейту.
    `);
}

function isDigits(source) {
  return /^[0-9,]+$/.test(source);
}