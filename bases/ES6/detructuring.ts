(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };

  const { poder: power, vision } = avengers;

  console.log(power, vision.toUpperCase());

  const printAvenger = ({ vision, ...resto }: Avengers): void =>
    console.log(vision, resto);

  printAvenger(avengers);

  const avengersArr: string[] = ["Cap. América", "Ironman", "Hulk"];

  const [capi, ironman] = avengersArr;

  console.log({ ironman, capi });
})();
