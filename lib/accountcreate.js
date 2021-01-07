const puppeteer = require("puppeteer");
const fetch = require("node-fetch");

const { generateName } = require("./name");
const { generatePassword } = require("./password");

const url = "https://www.target.com";

async function accountCreate(proxy) {
  // name generation, returns 2 index array ----> [first, last]
  let name = generateName();
  let password = generatePassword();
  let email = Math.random().toString(36).slice(2) + "@frescofresco.xyz";

  // navigate
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
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
  await page
    .type("input[id='username']", email)
    .catch((err) => console.error(err));

  await page.type("#firstname", name[0]);
  await page.type("#lastname", name[1]);
  await page.type("#password", password);

  // submit
  await page.click("button[id='createAccount']");

  return `${username}:${password}`;
}

module.exports = {
  accountCreate,
};
