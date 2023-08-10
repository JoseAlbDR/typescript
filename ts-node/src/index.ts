import Hero from "./classes/Hero";
import { powers } from "./data/powers";

const ironman = new Hero("Ironman", 1, 40);

console.log(ironman);
console.log(powers.at(-1)?.desc);
