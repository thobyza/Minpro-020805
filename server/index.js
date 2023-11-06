const express = require("express");
const PORT = 2000;
const db = require("./models");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.send("This is my API");
});

const { userRouter, cityRouter, referralRouter } = require("./routers");
app.use("/users", userRouter);
app.use("/city", cityRouter);
app.use("/referral", referralRouter);

app.listen(PORT, () => {
  // db.sequelize.sync({ alter: true });
  console.log(`Server running on ${PORT}`);
});
