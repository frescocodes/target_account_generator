const fs = require("fs");

module.exports = {
  // takes array of strings
  output: (accounts) => {
    const data = accounts.map((account) => account).join("\n");

    fs.writeFile("./accounts.txt", data, (err) => {
      if (err) return console.error(err);
    });

    return data;
  },
};
