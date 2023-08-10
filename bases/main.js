"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500,
    };
    const { poder: power, vision } = avengers;
    console.log(power, vision.toUpperCase());
    const printAvenger = (_a) => {
        var { vision } = _a, resto = __rest(_a, ["vision"]);
        return console.log(vision, resto);
    };
    printAvenger(avengers);
    const avengersArr = ["Cap. América", "Ironman", "Hulk"];
    const [capi, ironman] = avengersArr;
    console.log({ ironman, capi });
})();
(() => {
})();
//# sourceMappingURL=main.js.map