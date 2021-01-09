const puppeteer = require("puppeteer");

const CLI = require("clui");
const Spinner = CLI.Spinner;

const { createPerson } = require("./person");
const { proxies } = require("./proxies");
const proxy = proxies();
const catchAll = require("../config.json");

const url = "https://www.target.com";

// expects obj as arg
async function accountCreate(task) {
  const status = new Spinner("Generating name...\n", [
    "⣾",
    "⣽",
    "⣻",
    "⢿",
    "⡿",
    "⣟",
    "⣯",
    "⣷",
  ]);
  status.start();
  // [ username, [firstname, lastname], password ]
  let person = createPerson();

  // initialize
  status.message("Initializing task...");
  try {
    const browser = await puppeteer.launch({
      args: [`--proxy-server=http://${proxy[task].ip}:${proxy[task].port}`],
    });

    const page = await browser.newPage();

    await page.authenticate({
      username: proxy[task].user,
      password: proxy[task].pass,
    });

    status.message("Navigating...");
    // navigate
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(url);
    await page.waitForSelector("#account");
    await page.click("#account");
    await page.waitForSelector("li[id='accountNav-createAccount']");

    //delay for nav
    await page.waitFor(500);
    await page.click("li[id='accountNav-createAccount']");
    await page.waitForSelector("input[id='username']");

    // information
    status.message("Filling information...");
    await page.type("input[id='username']", person[0]);
    await page.type("#firstname", person[1][0]);
    await page.type("#lastname", person[1][1]);
    await page.type("#password", person[2]);

    // submit
    status.message("Submitting...");
    await page.click("button[id='createAccount']");
    await page
      .waitForSelector("button[id='circle-skip']")
      .then((res) => status.message("Account created!"))
      .catch((err) => {
        status.message("Error creating account. :(");
        console.error(err);
      });

    await page.close();
    return `${person[0]}:${person[2]}`;
  } catch (err) {
    console.log(`ERROR, EXITING. \n ${err}`);
    process.exit();
  }
}

module.exports = {
  accountCreate,
};
