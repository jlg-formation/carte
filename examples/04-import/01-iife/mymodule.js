(function () {
  "use strict";

  // here the variable toto is local to the IIFE
  var toto = 123;
  console.log("toto: ", toto);

  // here the variable titi is global
  window.mymodule = { toto: toto };
})();
