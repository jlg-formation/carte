const fs = require("fs");

const readdir = (path) =>
  new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(files);
    });
  });

const readFile = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, content) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(content);
    });
  });

readdir(".")
  .then((files) => {
    console.log("files: ", files);
    return readFile(files[0]);
  })
  .then((content) => {
    console.log("content: ", content);
  })
  .catch((err) => {
    console.log("err: ", err);
  });
