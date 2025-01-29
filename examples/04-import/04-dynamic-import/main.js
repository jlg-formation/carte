const mymodule = await import("./mymodule.js");
console.log("mymodule: ", mymodule);

// import.meta is a meta-property that exposes context-specific metadata to a JavaScript module.
// of course, import.meta is not the same in the browser and in Node.js
console.log("import.meta: ", import.meta);
