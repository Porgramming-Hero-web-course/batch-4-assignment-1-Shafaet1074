// problem07 - Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car {
  make : string;
  model : string;
  year:number;
  constructor(make:string , model:string,year:number) {
    this.make=make;
    this.model=model;
    this.year=year;
  }
getCarAge() : string{
  let currentTime = new Date();
  let Cyear = currentTime.getFullYear()
  let result=Cyear - this.year
  return `${result} (assumming current year is ${Cyear} )`
}
}
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();