module.exports = {
  randomTime: (min, max) => {
    ~~(Math.random() * (max - min) + max);
  },
};
