const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ExpenseParticipant = sequelize.define("ExpenseParticipant", {
  expense_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  share_amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  paid_amount: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  }
});

module.exports = ExpenseParticipant;