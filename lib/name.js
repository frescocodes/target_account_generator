const firstNames = require("../names/firstNames.json");
const lastNames = require("../names/lastNames.json");

function generateName() {
  let firstName = firstNames[~~(Math.random() * firstNames.length)];
  let lastName = lastNames[~~(Math.random() * lastNames.length)];
  return [firstName, lastName];
}

module.exports = {
  generateName,
};
