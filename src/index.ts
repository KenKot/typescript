// Basic Types
let msg: string = "hello";
let msg2: any = "hello any";

// Array
let arr1: number[] = [1, 2, 3];

// Tuple
let person: [number, string, boolean] = [1, "bob", true];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, "bob"],
  [2, "bob2"],
  [3, "bob3"],
];

// Union (can be string OR number)
let id: string | number = 22;

// Enum
enum Direction1 {
  Up,
  //   Up = 1,
  //   Up = "Down",
  Down,
  Left,
  Right,
}

console.log(Direction1.Up); //Outputs 0

// Objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};

// Cleaner Object
type Person = {
  id: number;
  name: string;
};

const pete: Person = {
  id: 1,
  name: "Pete",
};

// Type Assertion
let cid: any = 1;
let customerId = <number>cid; // OR USE: "cid as number"
// customerId = true; will give error

//Functions
function add(x: number, y: number): number {
  return x + y;
}

function log(n: string | number): void {
  console.log(n);
}

//Interfaces
interface AnimalInterface {
  readonly id: number; // "readonly" makes propery immutable
  name: string;
  age?: number; //age is optional w/ using "?"
}

const animal1: AnimalInterface = {
  id: 1,
  name: "Luke",
};

type Point = number | string;
const p1: Point = 1;

//Interface functions
interface MathFunc {
  (x: number, y: number): number;
}

// makes sure you properly used "(x: number, y: number)"
const addNums: MathFunc = (x: number, y: number): number => x + y;
const subNums: MathFunc = (x: number, y: number): number => x - y;

console.log(addNums(1, 1));
console.log(subNums(1, 1));

//
//

interface CarInterface {
  id: number;
  name: string;
  sayHi(): string; //sayHi will now get an error if it's not "void"
}

// Classes
class Car implements CarInterface {
  //   private id: number;
  //   protected  id: number; // accesible for "extended classes"
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  sayHi() {
    return "HI THERE, my name is " + this.name;
  }
}

// subclass

class SportsCar extends Car {
  private engine: string;

  constructor(id: number, name: string, engine: string) {
    super(id, name);
    this.engine = engine;
  }
}

const chevy = new Car(1, "Reddy");
console.log(chevy.sayHi());

const mustang = new SportsCar(2, "Bluey", "V8");
console.log(mustang.sayHi());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let stringArray = getArray<string>(["bob", "jim", "joe"]);

numArray.push(3);
