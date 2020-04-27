const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define(
  "user",
  {
    name: {
      tpe: Sequelize.STRING,
      allownull: false,
    },
    password: {
      type: Sequelize.STRING,
      allownull: false,
    },
  },
  {
    timestamps: false,
    tablename: "users",
  }
);

module.exports = User;
