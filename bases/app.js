"use strict";
// a: 10 porque es const explicito
// const a: number implicito
const a = 10;
// b: number porque es let implicito
// let b: number explicito
let b = 10;
// Declaracion c como string
let c;
c = "Alberto";
// c = 50 ERROR
// Error porque msg no tiene una declaracion explicita
// msg tiene un any
// function sayHello(msg) {
//   console.log(msg);
// }
// Declaracion implicita de msg como string
function sayHello(msg) {
    console.log(msg);
}
