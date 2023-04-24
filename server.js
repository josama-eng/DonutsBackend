require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const userRoute = require("./routes/user");
const productsRoute = require("./routes/products");
const categoriesRoute = require("./routes/category");
const mailRoute = require("./routes/mail");
const orderRoute = require("./routes/order");
require("./db/connect");
mongoose.set("strictQuery", false);

const server = express();
const port = process.env.PORT;

server.use(cors());
server.use(express.json());
server.use("/public", express.static(path.join(__dirname, "public")));

server.use(userRoute);
server.use(productsRoute);
server.use(categoriesRoute);
server.use(mailRoute);
server.use(orderRoute);

server.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
