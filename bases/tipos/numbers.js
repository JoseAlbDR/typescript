"use strict";
(() => {
    let avengers;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log("estamos en problemas");
    }
    else {
        console.log("estamos salvados");
    }
    avengers = Number("123A");
    console.log({ avengers }); // NaN que sigue siendo un numero
})();
