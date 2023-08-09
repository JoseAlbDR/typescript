(() => {
  let avenger: any = 123; // Cualquier tipo de dato
  const exists: boolean = false; // Debe declararse el tipo, no puede ser any
  let power; // Por defecto any

  avenger = "Dr Strange";
  // console.log(avenger.charAt(0));
  console.log((avenger as string).charAt(0)); // Casteo a string

  avenger = 150.23123124;
  console.log(<number>avenger.toFixed(2)); // Otro tipo de casteo

  console.log(exists);
  console.log(power);
})();
