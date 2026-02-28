const ExpenseParticipant =
 require("../models/ExpenseParticipant");

exports.calculateBalances =
 async(userId)=>{

 const rows =
  await ExpenseParticipant.findAll();

 const net={};

 rows.forEach(r=>{
  const diff=
   r.paid_amount-r.share_amount;

  net[r.user_id]=
   (net[r.user_id]||0)+diff;
 });

 const result=[];

 Object.keys(net).forEach(uid=>{

  if(uid==userId) return;

  if(net[uid]<0)
   result.push({
    userId:uid,
    owesYou:Math.abs(net[uid])
   });

  if(net[uid]>0)
   result.push({
    userId:uid,
    youOwe:net[uid]
   });

 });

 return result;
};