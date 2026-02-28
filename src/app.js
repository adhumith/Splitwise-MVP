const express = require("express");

const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const balanceRoutes = require("./routes/balanceRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is Running");
});

app.use("/users", userRoutes);
app.use("/expenses", expenseRoutes);
app.use("/balances", balanceRoutes);

module.exports = app;