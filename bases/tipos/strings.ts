(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Héroe: Volcan Negro`;

  console.log(`I'm ${batman}`);
  console.log(batman.toUpperCase());

  console.log(batman[10]?.toUpperCase() || "No está presente"); // Undefined sin ?, con ? si la posicion 10 de batman tiene algo muestralo si no undefined
})();
