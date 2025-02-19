class AgesManager {
  private age;
  private devAge;
  private thisYear;

  constructor() {
    this.age = Number.parseInt(
      `${
        (new Date().getTime() - new Date("2007-02-16T23:50:00").getTime()) /
        (1000 * 60 * 60 * 24 * 365.25)
      }`
    );
    this.devAge = Number.parseInt(
      `${
        (new Date().getTime() - new Date("2022-02-03T13:15:00").getTime()) /
        (1000 * 60 * 60 * 24 * 365.25)
      }`
    );
    this.thisYear = new Date().getFullYear()
    // * 1000 => Segundos | * 60 => Minutos | *24 => horas | *365.25 => dias
  }

  getAge() {
    return this.age;
  }

  getDevAge() {
    return this.devAge;
  }

  getThisYear() {
    return this.thisYear;
  }
}

export const agesManager = new AgesManager();