const fs = require("fs");

fs.readdir(".", (err, files) => {
  if (err) {
    console.log("err: ", err);
    return;
  }
  console.log("files: ", files);
  fs.readFile(files[0], "utf8", (err, content) => {
    if (err) {
      console.log("err: ", err);
      return;
    }
    console.log("content: ", content);
  });
});
