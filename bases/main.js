"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.avgAge;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} ${this.team}`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger("Antman", "Capitan", "Scott Lang");
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado!");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log(`Constructor Xmen llamado!`);
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("El nombre debe de ser mayor de 3 letras");
            }
            this.name = name;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        getFullNameDesdeXmen() {
            return super.getFullName();
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    console.log(wolverine);
    console.log(wolverine.getFullNameDesdeXmen());
    console.log(wolverine.fullName);
    wolverine.fullName = "Fe";
    console.log(wolverine.fullName);
})();
//# sourceMappingURL=main.js.map