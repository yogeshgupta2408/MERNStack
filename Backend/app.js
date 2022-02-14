const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const router = require("./routes/movie-routes");
const userRouter = require("./routes/user-routes");
const cors = require("cors");
const app = express();

dotenv.config({ path: "./.env" });

//MiddleWare
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/movies", router);

mongoose
  .connect(
    "mongodb+srv://<username>:<password>@cluster0.3wk3i.mongodb.net/<DBName>?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
