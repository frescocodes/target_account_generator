module.exports = {
  validateEmail: (input) => {
    let validated = input;
    if (!(input[0] == "@")) {
      validated = "@" + input;
    }

    if (validated.split(".").length < 2) {
      console.log(typeof validated);
      console.log("Invalid email (missing domain, ex: .com, .xyz), exiting.");
      process.exit();
    } else {
      return validated;
    }
  },
};
