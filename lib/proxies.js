const fs = require("fs");

const textByLine = fs.readFileSync("./../proxies.txt").toString().split("\n");
const cleaned = textByLine.map((proxy) => {
  proxy.includes("\r") ? proxy.split("\r")[0] : proxy;
});

function splitProxies() {
  const final = [];
  cleaned.forEach((proxy) => {
    const split = proxy.split(":");
    final.push({
      ip: split[0],
      port: split[1],
      user: split[2],
      pass: split[3],
    });
  });

  return final;
}

module.exports = {
  splitProxies,
};
