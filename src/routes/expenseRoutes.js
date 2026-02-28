const router = require("express").Router();
const controller =
 require("../controllers/expenseController");

router.post("/", controller.addExpense);
router.get("/", controller.getExpenses);
router.put("/:id", controller.updateExpense);
router.delete("/:id", controller.deleteExpense);
router.get("/user/:userId", controller.getUserExpenses);
module.exports = router;