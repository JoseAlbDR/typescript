(() => {
  type Superhero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Superhero = "Fernando";
  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Bruce",
    age: 43,
    powers: ["Ninguno"],
  };
  console.log(typeof myCustomVariable);
})();
