const express = require("express");
const cors = require("cors");
const userRouter = require("./user/router");
const jokeRouter = require("./joke/router");
const authRouter = require("./auth/router");
const app = express();

app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(userRouter);
app.use(jokeRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app listen on ${port}`);
});
