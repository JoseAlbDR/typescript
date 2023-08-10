"use strict";
const a = 10;
let b = 10;
let c;
c = "Alberto";
function sayHello(msg) {
    console.log(msg);
}
(() => {
    const a = 10;
    console.log(a);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    },
};
const villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true,
    },
];
const charles = {
    poder: "psiquico",
    estatura: 1.78,
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    let Fuerzas;
    (function (Fuerzas) {
        Fuerzas[Fuerzas["acuaman"] = 0] = "acuaman";
        Fuerzas[Fuerzas["batman"] = 1] = "batman";
        Fuerzas[Fuerzas["flash"] = 5] = "flash";
        Fuerzas[Fuerzas["superman"] = 100] = "superman";
    })(Fuerzas || (Fuerzas = {}));
    const fuerzaFlash = Fuerzas.flash;
    const fuerzaSuperman = Fuerzas.superman;
    const fuerzaBatman = Fuerzas.batman;
    const fuerzaAcuaman = Fuerzas.acuaman;
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || "Nothing"}`.toUpperCase();
        return `${firstName} ${lastName || "Nothing"}`;
    };
    const name = fullName("Tony", "Stark", true);
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "Nothing"}`;
    };
    const name = fullName("Tony");
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    let noName;
    const name = fullName(noName, "Stark");
    console.log(name);
})();
(() => {
    const fullName = (firstName, ...args) => {
        return `${firstName} ${args.join(" ")}`;
    };
    const superman = fullName("CLark", "Joseph", "Kent");
    console.log(superman);
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    let myFunction;
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction("Alberto"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatSignal = () => {
        return "Batiseñal activada!";
    };
    console.log(typeof activateBatSignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super fuerza"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super fuerza"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    let myCustomVariable = "Fernando";
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
(() => {
    let avenger = 123;
    const exists = false;
    let power;
    avenger = "Dr Strange";
    console.log(avenger.charAt(0));
    avenger = 150.23123124;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ["Omega Rojo", "Dornammu", "Duende Verde"];
    villians.forEach((villian) => console.log(villian.toUpperCase()));
    numbers.push(11);
    console.log(numbers);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isBatman });
    isSuperman = isBatman ? false : true;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false)
            throw new Error(message);
        return 1;
    };
    error("Auxilio");
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
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
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = "Batman";
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No está presente");
})();
(() => {
    const hero = ["Dr Strange", 100, true];
    hero[0] = "Ironman";
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => true;
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map