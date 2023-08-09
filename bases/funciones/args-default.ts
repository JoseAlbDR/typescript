(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if (upper) return `${firstName} ${lastName || "Nothing"}`.toUpperCase();

    return `${firstName} ${lastName || "Nothing"}`;
  };

  const name = fullName("Tony", "Stark", true);
  console.log(name);
})();
