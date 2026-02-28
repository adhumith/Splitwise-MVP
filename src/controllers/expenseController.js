const service =
 require("../services/expenseService");

exports.addExpense = async(req,res)=>{
 const result =
   await service.createExpense(req.body);
 res.json(result);
};

exports.getExpenses = async(req,res)=>{
 const result =
   await service.getExpenses();
 res.json(result);
};

exports.updateExpense = async(req,res)=>{
 await service.updateExpense(
   req.params.id,
   req.body
 );
 res.json({message:"updated"});
};

exports.deleteExpense = async(req,res)=>{
 await service.deleteExpense(req.params.id);
 res.json({message:"deleted"});
};

exports.getUserExpenses =
 async(req,res)=>{

 const result =
   await service.getUserExpenses(
     req.params.userId
   );

 res.json(result);
};