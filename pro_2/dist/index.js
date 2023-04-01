"use strict";
///////Rebtal System//////////
class Vehicle {
    constructor(_model, _speed, _year, _rented = true) {
        this._model = _model;
        this._speed = _speed;
        this._year = _year;
        this._rented = _rented;
    }
    ////////getter method use to access instance variable
    get model() {
        return this._model;
    }
    get speed() {
        return this._speed;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    ////// setter method use to change the value of instance variable
    set setrented(a) {
        this._rented = a;
    }
    rent() {
        if (!this._rented) {
            console.log("This Vehicle already rented please choose  another Vehicle");
        }
        else {
            this._rented = true;
        }
    }
    return() {
        if (this._rented)
            console.log("This vehicle is available");
        else {
            this._rented = true;
        }
    }
}
class Car extends Vehicle {
    constructor(model, speed, year, rented = true) {
        super(model, speed, year, rented);
    }
    rentalrate() {
        return 5000;
    }
}
class Truck extends Vehicle {
    constructor(model, speed, year, rented = true) {
        super(model, speed, year, rented);
    }
    rentalrate() {
        return 15000;
    }
}
class Motorcycle extends Vehicle {
    constructor(model, speed, year, rented = true) {
        super(model, speed, year, rented);
    }
    rentalrate() {
        return 30000;
    }
}
// const obj=new Vehicle()
const obj1 = new Car(2012, 2600, 23);
const obj2 = new Motorcycle(2012, 2600, 23);
const obj3 = new Truck(2012, 2600, 23);
////Out put of Car///
console.log(obj1.rent());
console.log(obj1.return());
console.log(obj1.rentalrate());
////Out put of Motorcycle///
console.log(obj2.rent());
console.log(obj2.return());
console.log(obj2.rentalrate());
////Out put of Truck///
console.log(obj3.rent());
console.log(obj3.return());
console.log(obj3.rentalrate());
//# sourceMappingURL=index.js.map