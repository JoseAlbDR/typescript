(() => {
  class Avenger {
    // private name: string;
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {
      // this.name = name;
      // this.team = team;
      // this.realName = realName;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");

  console.log(antman);
  console.log(Avenger.avgAge);
})();
