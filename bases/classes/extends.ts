(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor Avenger llamado!");
    }

    // private getFullName(): string {
    //   return `${this.name} ${this.realName}`;
    // }
    protected getFullName(): string {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log(`Constructor Xmen llamado!`);
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre debe de ser mayor de 3 letras");
      }
      this.name = name;
    }

    get fullName(): string {
      return `${this.name} - ${this.realName}`;
    }

    getFullNameDesdeXmen() {
      return super.getFullName();
    }
  }

  // const wolverine = new Xmen("Wolverine", "Logan", true);

  // console.log(wolverine);

  // console.log(wolverine.getFullNameDesdeXmen());

  // console.log(wolverine.fullName);

  // wolverine.fullName = "Fe";
  // console.log(wolverine.fullName);
})();
