const puppeteer = require("puppeteer");

const { createPerson } = require("./person");

const url = "https://www.target.com";

async function accountCreate(proxy) {
  let person = createPerson();

  // initialize
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

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
  await page.type("input[id='username']", person[0]);
  await page.type("#firstname", person[1][0]);
  await page.type("#lastname", person[1][1]);
  await page.type("#password", person[2]);

  // submit
  await page.click("button[id='createAccount']");
  return `${person[0]}:${person[1][1]}`;
}

accountCreate();

module.exports = {
  accountCreate,
};
