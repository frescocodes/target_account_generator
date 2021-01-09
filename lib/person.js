const { generateName } = require("./name");
const { generatePassword } = require("./password");

const catchAll = require("../config.json");

module.exports = {
  createPerson: () => {
    // [firstName, lastName]
    let name = generateName();
    let password = generatePassword();
    let email =
      name[0] + Math.random().toString(36).slice(2) + catchAll["catch-all"];

    return [email, name, password];
  },
};
