(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: "Ironman",
    weapon: "Armorsuit",
  };
  const capi: Avenger = {
    name: "Captain America",
    weapon: "Shield",
  };
  const thor: Avenger = {
    name: "Thorcuato",
    weapon: "Mjölnir",
  };

  const avengers: Avenger[] = [ironman, capi, thor];

  for (const avenger of avengers) {
    console.log(avenger);
  }
})();
