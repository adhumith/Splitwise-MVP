const service =
  require("../services/balanceService");

exports.getBalances = async (req, res) => {

  const result =
    await service.calculateBalances(
      req.params.userId
    );

  res.json(result);
};