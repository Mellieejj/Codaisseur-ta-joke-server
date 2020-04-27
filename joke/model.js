const Sequelize = require("sequelize");
const db = require("../db");

const Joke = db.define(
  "joke",
  {
    setup: {
      type: Sequelize.STRING,
      allownull: false,
    },
    punchline: {
      type: Sequelize.STRING,
      allownull: false,
    },
  },
  {
    timestamps: false,
    tablename: "jokes",
  }
);

module.exports = Joke;
