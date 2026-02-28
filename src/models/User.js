const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
  },
  currency: {
    type: DataTypes.STRING,
    defaultValue: "INR"
  }
});

module.exports = User;