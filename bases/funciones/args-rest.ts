(() => {
  const fullName = (firstName: string, ...args: string[]): string => {
    return `${firstName} ${args.join(" ")}`;
  };

  const superman = fullName("CLark", "Joseph", "Kent");

  console.log(superman);
})();
