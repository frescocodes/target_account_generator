const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const fs = require("fs");
const inquirer = require("./lib/inquirer");

const { accountCreate } = require("./lib/accountcreate");
const { output } = require("./lib/output");
const { validateEmail } = require("./lib/validateEmail");

const configPath = "./config.json";
const config = require(configPath);

clear();
console.log("CONFIG", typeof config["catch-all"]);

// frescop
console.log(
  chalk.hex("#71eeb8")(
    figlet.textSync("Frescop", {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
    })
  )
);

console.log(
  chalk.redBright("TARGET ACCOUNT GENERATOR") +
    " " +
    chalk.bgHex("#71EEB8")("BETA")
);

const run = async () => {
  try {
    fs.access(configPath, fs.F_OK, async (err) => {
      if (!config["catch-all"]) {
        const { catchAll } = await inquirer.askCatchall();
        console.log(validateEmail(catchAll));
        validateEmail(catchAll);

        fs.writeFileSync("./config.json", `{"catch-all": "${catchAll}"}`);
      }

      const { amount } = await inquirer.makeAccounts();

      const initialize = [...Array(Number(amount)).keys()];
      const tasks = initialize.map(accountCreate);
      const results = await Promise.all(tasks);
      output(results);
    });
  } catch {
    console.log("error");
  }
};

run();
