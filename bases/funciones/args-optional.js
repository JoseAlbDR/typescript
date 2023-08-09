"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "Nothing"}`;
    };
    const name = fullName("Tony");
    console.log(name);
})();
