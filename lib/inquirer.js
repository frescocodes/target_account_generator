const clear = require("clear");
const inquirer = require("inquirer");
const { accountCreate } = require("./accountcreate");

module.exports = {
  askCatchall: () => {
    const question = [
      {
        name: "catchAll",
        type: "input",
        message: "Enter your catch-all domain (ex: @domain.here)",
        validate: (value) => {
          if (!value.length) {
            return "Please enter your catch-all domain.";
          }

          return true;
        },
      },
    ];
    // ask questions
    return inquirer.prompt(question);
  },
  makeAccounts: () => {
    const questions = [
      {
        name: "amount",
        type: "input",
        message: "How many accounts would you like to generate? (ex: 5)",
        validate: (value) => {
          if (!value.length || value <= 0) {
            return "Please input an amount greater than 0. (ex: 5)";
          } else {
            return true;
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
