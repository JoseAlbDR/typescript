(() => {
  let isSuperman: boolean = true;
  let isBatman: boolean = false;
  console.log({ isBatman });

  isSuperman = isBatman ? false : true;
  console.log({ isSuperman });
})();
