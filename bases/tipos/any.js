"use strict";
(() => {
    let avenger = 123; // Cualquier tipo de dato
    const exists = false; // Debe declararse el tipo, no puede ser any
    let power; // Por defecto any
    avenger = "Dr Strange";
    // console.log(avenger.charAt(0));
    console.log(avenger.charAt(0)); // Casteo a string
    avenger = 150.23123124;
    console.log(avenger.toFixed(2)); // Otro tipo de casteo
    console.log(exists);
    console.log(power);
})();
