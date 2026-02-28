const User = require("../models/User");
const { Expense,
 ExpenseParticipant } =
 require("../models");

exports.createExpense = async (data) => {

  const { name, amount, paid_by, participants } = data;

  const payer = await User.findByPk(paid_by);

  if (!payer)
    throw new Error("Paid_by user does not exist");

  const users =
    await User.findAll({
      where: { id: participants }
    });

  if (users.length !== participants.length)
    throw new Error("One or more participants invalid");

  const expense =
    await Expense.create({
      name,
      amount,
      paid_by
    });

  const share =
    amount / participants.length;

  const rows =
    participants.map(uid => ({
      expense_id: expense.id,
      user_id: uid,
      share_amount: share,
      paid_amount:
        uid === paid_by ? amount : 0
    }));

  await ExpenseParticipant.bulkCreate(rows);

  return expense;
};

exports.getExpenses=()=>{
 return Expense.findAll();
};

exports.updateExpense=
(id,data)=>{
 return Expense.update(data,{
  where:{id}
 });
};

exports.deleteExpense=
(id)=>{
 return Expense.destroy({
  where:{id}
 });
};

exports.getUserExpenses =
 async(userId)=>{

 return Expense.findAll({
   include:[
     {
       model: ExpenseParticipant,
       where:{ user_id:userId }
     }
   ]
 });
};