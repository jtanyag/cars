// Story: As a programmer, I can make a car.
// Hint: Create a class called Car, and create a variable called myCar which contains an object of class Car.

// Story: As a programmer, I can tell how many wheels a car has; default is four.
//
// Story: As a programmer, I can make a Tesla car.
// Hint: Create an variable called myTesla which is of class Tesla which inherits from class Car.
//
// Story: As a programmer, I can make a Tata car.
//
// Story: As a programmer, I can make a Toyota car.
//
// Story: As a programmer, I can tell which model year a vehicle is from. Model years never change.
// Hint: Make model year part of the initialization.
//
// Story: As a programmer, I can turn on and off the lights on a given Car.
// Hint: Create method(s) to allow programmer to turn lights on and off. Which class are the methods in?
//
// Story: As a programmer, I can determine if the lights are on or off. Lights start in the off position.
//
// Story: As a programmer, I can signal left and right. Turn signals starts off.
//
// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 km/h.
//
// Story: As a programmer, I can speed my Teslas up by 10 per acceleration.
//
// Story: As a programmer, I can slow my Teslas down by 7 per braking.
//
// Story: As a programmer, I can speed my Tatas up by 2 per acceleration.
//
// Story: As a programmer, I can slow my Tatas down by 1.25 per braking.
//
// Story: As a programmer, I can speed my Toyotas up by 7 per acceleration.
//
// Story: As a programmer, I can slow my Toyotas down by 5 per braking.
//
// Story: As a programmer, I can call upon a car to tell me all it's information.
// Hint: Implement carInfo method on one or more classes. You can call a super class's carInfo with super.
//
// Story: As a programmer, I can keep a collection of two of each kind of vehicle, all from different years.
// Hint: Create two of each vehicles, all from different model years, and put them into an Array.
//
// Story: As a programmer, I can sort my collection of cars based on model year.
//
// Story: As a programmer, I can sort my collection of cars based on model.
// Hint: Sort based on class name.
//
// Story: As a programmer, I can sort my collection of cars based on model and then year.
class Car {
  constructor() {
    this.wheels = 4
    this.lightsOn = false
    this.signal = "off"
    this.speed = 0
  }

  lights(){
    if (this.lightsOn == false) {
      this.lightsOn = true;
    } else {
      this.lightsOn = false
    }
  }

  signals(direction) {
    if (direction == "left") {
      this.signal = "left";
    } else if (direction == "right") {
      this.signal = "right";
    } else if (direction == "off") {
      this.signal = "off";
    }
  }

}

class Tesla extends Car {
  constructor() {
    super()
    this.modelyear = 2050
  }

  accelerate() {
    this.speed += 10
  }

  brake() {
    this.speed -= 7
  }

  carInfo() {
    return "wheels: " + this.wheels + ", lights: " + this.lightsOn + ", signal: " + this.signal + ", speed: " + this.speed + " km/h, model year: " + this.modelyear
  }

}

class Tata extends Car {
  constructor() {
    super()
    this.modelyear = 2070
  }

  accelerate() {
    this.speed += 2
  }

  brake() {
    this.speed -= 1.25
  }

  carInfo() {
    return "wheels: " + this.wheels + ", lights: " + this.lightsOn + ", signal: " + this.signal + ", speed: " + this.speed + " km/h, model year: " + this.modelyear
  }
}

class Toyota extends Car {
  constructor() {
    super()
    this.modelyear = 2005
  }

  accelerate() {
    this.speed += 7
  }

  brake() {
    this.speed -= 5
  }

  carInfo() {
    return "wheels: " + this.wheels + ", lights: " + this.lightsOn + ", signal: " + this.signal + ", speed: " + this.speed + " km/h, model year: " + this.modelyear
  }
}


let myCar = new Car;

let myTesla = new Tesla()
  // myTesla.modelyear = 2017

let myTesla2 = new Tesla()
  myTesla2.modelyear = 2016

let myTata = new Tata()
  // myTata.modelyear = 1970

let myTata2 = new Tata()
  myTata2.modelyear = 1980

let myToyota = new Toyota()
  // myToyota.modelyear = 2005

let myToyota2 = new Toyota()
  myToyota2.modelyear = 1995

var allCars = [myTesla, myTesla2, myTata, myTata2, myToyota, myToyota2]

allCars.sort(function(a,b) {
  return a.modelyear - b.modelyear;
})

allCars.sort(function(a,b) {
  return (a.constructor.name> b.constructor.name) *1 + (a.constructor.name< b.constructor.name)*-1;
})

function inOrder() {

  allCars.sort(function(a,b) {
    return a.modelyear - b.modelyear;
  })

  allCars.sort(function(a,b) {
    return (a.constructor.name> b.constructor.name) *1 + (a.constructor.name< b.constructor.name)*-1;
  })
  return allCars
}
