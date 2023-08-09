"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || "Nothing"}`.toUpperCase();
        return `${firstName} ${lastName || "Nothing"}`;
    };
    const name = fullName("Tony", "Stark", true);
    console.log(name);
})();
