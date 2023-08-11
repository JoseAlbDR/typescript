// import { getPokemon } from "./genercis/get-pokemon";

// console.log(
//   getPokemon(1)
//     .then((pokemon) => console.log(pokemon.sprites.front_default))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("Fin fetch"))
// );

import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon("Charmander");

// (Pokemon.prototype as any).customName = "Pikachu";

// console.log(charmander);

// charmander.savePokemonToDB(-50);

console.log(charmander);
