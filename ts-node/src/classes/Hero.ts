import { powers, Power } from "../data/powers";

export default class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get power(): string {
    return (
      // powers.find((power) => power.id === this.powerId).desc || "not found"
      powers.find((power) => power.id === this.powerId)?.desc || "not found"
    );
  }
}
