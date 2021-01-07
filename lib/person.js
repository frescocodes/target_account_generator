const { generateName } = require("./name");
const { generatePassword } = require("./password");

module.exports = {
  createPerson: () => {
    // [firstName, lastName]
    let name = generateName();
    let password = generatePassword();
    let email =
      name[0] + Math.random().toString(36).slice(2) + "@frescofresco.xyz";

    return [email, name, password];
  },
};
