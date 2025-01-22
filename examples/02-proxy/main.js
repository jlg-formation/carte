const target = {
  firstname: "Jean-Louis",
  lastname: "GUENEGO",
};

const handler = {
  get(target, prop) {
    if (prop === "displayName") {
      return `${target.firstname} ${target.lastname}`;
    }
    throw new Error(`Property ${prop} does not exist`);
  },

  set(target, prop, value) {
    if (prop === "displayName") {
      const [firstname, lastname] = value.split(" ");
      target.firstname = firstname;
      target.lastname = lastname;
      return;
    }
    target[prop] = value;
  },
};

const proxy = new Proxy(target, handler);
console.log("proxy.displayName: ", proxy.displayName);

proxy.firstname = "Suzana";
console.log("proxy.displayName: ", proxy.displayName);

proxy.lastname = "DEMETRESCU";
console.log("proxy.displayName: ", proxy.displayName);

proxy.displayName = "Nicolas DUPONT";
console.log("proxy.displayName: ", proxy.displayName);
console.log("proxy: ", proxy);
console.log("target: ", target);
