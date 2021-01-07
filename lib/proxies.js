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
  const split = [];
  cleaned.forEach((proxy) => {
    split.push({
      ip: proxy.split(":")[0],
      port: proxy.split(":")[1],
      user: proxy.split(":")[2],
      pass: proxy.split(":")[3],
    });
  });

  return split;
}

splitProxies();

module.exports = {
  splitProxies,
};
