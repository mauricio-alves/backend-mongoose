const express = require("express");
require("dotenv").config();

const app = express();
const dbConnect = require("./config/db.config");
dbConnect();

app.use(express.json());

const fruitRouter = require("./routes/fruit.router");
app.use("/fruits", fruitRouter);

const userRouter = require("./routes/user.router");
app.use("/users", userRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
