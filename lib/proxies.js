const fs = require("fs");

const textByLine = fs.readFileSync("./../proxies.txt").toString().split("\n");
const cleaned = textByLine.map((proxy) => {
  if (proxy.includes("\r")) {
    return proxy.split("\r")[0];
  } else {
    return proxy;
  }
});

function splitProxies() {
  const final = [];
  cleaned.forEach((element) => {
    const split = element.split(":");
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
