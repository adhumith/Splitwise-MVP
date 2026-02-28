const router = require("express").Router();
const controller =
  require("../controllers/balanceController");

router.get("/:userId", controller.getBalances);

module.exports = router;