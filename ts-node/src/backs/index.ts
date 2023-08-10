import {
  printObject,
  genericFunction,
  genericFunctionArrow,
} from "../genercis/generics";
// import { Hero } from "./interfaces/hero";
// import { Villians } from "./interfaces/villians";
import { Hero, Villians } from "../interfaces";

// printObject(123);
// printObject(new Date().toLocaleDateString());
// printObject({ a: 1, b: 2, c: 3, d: 4 });
// printObject([1, 2, 3, 4]);

// console.log(genericFunction(3.141916).toFixed(2));
// console.log(genericFunction("Hola Mundo").split(" "));
// console.log(genericFunctionArrow(new Date()).toUTCString());

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

console.log(genericFunctionArrow<Villians>(deadpool).dangerLevel);
