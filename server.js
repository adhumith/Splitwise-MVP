const app = require("./src/app");
const sequelize = require("./src/config/database");

const PORT = 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Database connected");
    console.log(`Server running on ${PORT}`);
  });
});