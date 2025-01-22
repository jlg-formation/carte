const obj = {
  firstname: "Jean-Louis",
  lastname: "GUENEGO",
  get displayName() {
    return `${this.firstname} ${this.lastname}`;
  },

  set displayName(value) {
    const [firstname, lastname] = value.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  },
};

console.log("obj: ", { ...obj });

obj.displayName = "Suzana DEMETRESCU";
console.log("obj: ", obj);
