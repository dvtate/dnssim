// Note that PM2 logs really waste resources so probably better not to use
module.exports = {
  apps: [{
    name: "dnssim",
    script: "./main.js",
    env: {
      THREADS: 15,
    },
  }]
};
