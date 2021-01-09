const fs = require("fs");

module.exports = {
  // takes array of strings
  output: (accounts) => {
    fs.writeFile("accounts.txt", accounts, (err) => {
      if (err) return console.error(err);

      // print each acc on new line
      accounts.forEach((account) => `${account}\n`);
    });
  },
};
