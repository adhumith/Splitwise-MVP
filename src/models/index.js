const Expense = require("./Expense");
const ExpenseParticipant = require("./ExpenseParticipant");

Expense.hasMany(ExpenseParticipant, {
  foreignKey: "expense_id"
});

ExpenseParticipant.belongsTo(Expense, {
  foreignKey: "expense_id"
});

module.exports = {
  Expense,
  ExpenseParticipant
};