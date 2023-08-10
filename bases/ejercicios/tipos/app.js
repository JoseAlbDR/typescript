"use strict";
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
//# sourceMappingURL=app.js.map