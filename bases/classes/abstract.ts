(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo(): string {
      return "Mundo a salvo";
    }
  }
  class Villian extends Mutante {
    conquistarMundo(): string {
      return "Mundo conquistado";
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan");
  const magneto = new Villian("Magneto", "Magnus");

  // console.log(wolverine.salvarMundo());
  // console.log(magneto.conquistarMundo());

  const printName = (character: Mutante): void => {
    console.log(character.realName);
  };

  // printName(wolverine);
  // printName(magneto);
})();
