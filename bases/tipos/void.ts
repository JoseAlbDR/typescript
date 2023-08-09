(() => {
  function callBatman(): void {
    return;
  }

  const callSuperman = (): void => true;

  const a = callBatman();
  console.log(a);

  // undefined !== null !== void
})();
