module.exports = {
  generatePassword: () => {
    return (
      Math.random().toString(36).slice(10).toUpperCase() +
      Math.random().toString(36).slice(2) +
      Math.random().toString(36).slice(10).toUpperCase()
    );
  },
};
