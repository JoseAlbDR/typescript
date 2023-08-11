import { flattenDiagnosticMessageText } from "typescript";

// Decorator
function printToConsole(constructor: Function) {
  console.log(constructor);
}

// Factory decorator (returns fn)
const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    // console.log({ target, propertyKey, descriptor });
    // descriptor.value = () => console.log("Hola Mundo");
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.log("El id del pokemon debe de estar entre 1 y 800");
      } else {
        return originalMethod(id);
      }
    };
  };
}

@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {
  public publicApi: string = "https://pokeapi.co";

  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon saved to database ${id}`);
  }
}
