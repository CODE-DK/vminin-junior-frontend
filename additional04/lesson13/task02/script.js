/* jshint ignore: start */
class CarService {
  static DefaultWorkingHours = {
    from: "9:00",
    till: "20:00",
  };
  constructor(name, workingHours = DefaultWorkingHours) {
    this.name = name;
    this.workingHours = workingHours;
  }
  repairCar(carName) {
    if (!carName) {
      return console.error(`
        Вам необходимо указать название машины, 
        чтобы ее отремонтировать
    `);
    }

    const fromHours = +this.workingHours.from.split(":")[0];
    const tillHours = +this.workingHours.till.split(":")[0];

    const currentHours = new Date().getHours();
    if (fromHours < currentHours && currentHours < tillHours) {
      return console.log(
        `Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`,
      );
    } else {
      return console.log("К сожалению, мы сейчас закрыты. Приходите завтра");
    }
  }
}

const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');