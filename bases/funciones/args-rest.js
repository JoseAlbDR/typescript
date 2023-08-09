"use strict";
(() => {
    const fullName = (firstName, ...args) => {
        return `${firstName} ${args.join(" ")}`;
    };
    const superman = fullName("CLark", "Joseph", "Kent");
    console.log(superman);
})();
