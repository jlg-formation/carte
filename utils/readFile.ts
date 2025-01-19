export const readFile = (mimeType: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = mimeType;

    fileInput.addEventListener("change", () => {
      if (fileInput.files === null || fileInput.files.length === 0) {
        return;
      }
      const file = fileInput.files[0]; // Get the first selected file

      const reader = new FileReader();

      reader.onload = function (event) {
        if (typeof reader.result !== "string") {
          reject("bad type");
          return;
        }
        resolve(reader.result);
      };

      reader.onerror = function () {
        reject("Error reading file!");
      };

      reader.readAsText(file); // Read file content as text
    });

    fileInput.click(); // Trigger the file selection dialog
  });
};
