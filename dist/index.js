"use strict";
// Basic Types
let msg = "hello";
let msg2 = "hello any";
// Array
let arr1 = [1, 2, 3];
// Tuple
let person = [1, "bob", true];
// Tuple Array
let employee;
employee = [
    [1, "bob"],
    [2, "bob2"],
    [3, "bob3"],
];
// Union (can be string OR number)
let id = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    //   Up = 1,
    //   Up = "Down",
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); //Outputs 0
// Objects
const user = {
    id: 1,
    name: "John",
};
const pete = {
    id: 1,
    name: "Pete",
};
// Type Assertion
let cid = 1;
let customerId = cid; // OR USE: "cid as number"
// customerId = true; will give error
//Functions
function add(x, y) {
    return x + y;
}
function log(n) {
    console.log(n);
}
const animal1 = {
    id: 1,
    name: "Luke",
};
const p1 = 1;
// makes sure you properly used "(x: number, y: number)"
const addNums = (x, y) => x + y;
const subNums = (x, y) => x - y;
console.log(addNums(1, 1));
console.log(subNums(1, 1));
// Classes
class Car {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHi() {
        return "HI THERE, my name is " + this.name;
    }
}
// subclass
class SportsCar extends Car {
    constructor(id, name, engine) {
        super(id, name);
        this.engine = engine;
    }
}
const chevy = new Car(1, "Reddy");
console.log(chevy.sayHi());
const mustang = new SportsCar(2, "Bluey", "V8");
console.log(mustang.sayHi());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(["bob", "jim", "joe"]);
numArray.push(3);
