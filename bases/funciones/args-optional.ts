(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || "Nothing"}`;
  };

  const name = fullName("Tony");
  console.log(name);
})();
