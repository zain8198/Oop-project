"use strict";
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
        if (!this._rented)
            console.log("This Vehicle already rented please choose  another Vehicle");
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
class Vehicletypes extends Vehicle {
    constructor(type, model, speed, year, rented) {
        super(model, speed, year, rented);
        this.type = type;
    }
    rentalrate() {
        if (this.type == "car") {
            return 1000;
        }
        else if (this.type == "truck") {
            return 30000;
        }
        else if (this.type == "motorcycle") {
            return 5000;
        }
        else {
            throw new Error("This type does not exist");
        }
    }
}
class Car extends Vehicle {
    constructor(type, model, speed, year, rented) {
        super(model, speed, year, rented);
        this.type = type;
    }
    rentalrate() {
        return 5000;
    }
}
class Truck extends Vehicle {
    constructor(type, model, speed, year, rented) {
        super(model, speed, year, rented);
        this.type = type;
    }
    rentalrate() {
        return 15000;
    }
}
class Motocycle extends Vehicle {
    constructor(model, speed, year, rented) {
        super(model, speed, year, rented);
    }
    rentalrate() {
        return 30000;
    }
}
// const obj=new Vehicle()
const obj1 = new Motocycle(2012, 2600, 2019, false);
console.log("hrh");
console.log("hrh");
console.log("hrh");
console.log("hrh");
console.log("hrh");
//# sourceMappingURL=index.js.map