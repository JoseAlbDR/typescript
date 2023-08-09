// a: 10 porque es const explicito
// const a: number implicito
const a: number = 10;

// b: number porque es let implicito
// let b: number explicito
let b: number = 10;

// Declaracion c como string
let c: string;
c = "Alberto";
// c = 50 ERROR

// Error porque msg no tiene una declaracion explicita
// msg tiene un any
// function sayHello(msg) {
//   console.log(msg);
// }

// Declaracion implicita de msg como string
function sayHello(msg: string) {
  console.log(msg);
}

// Funcion anonima autoinvocada
(() => {
  const a: number = 10;
  console.log(a);
})();
