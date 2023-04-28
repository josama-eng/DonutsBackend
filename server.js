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
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "https://tubular-sundae-150fb1.netlify.app/",
  optionsSuccessStatus: 200,
};

server.use(cors(corsOptions));
server.use(express.json());
server.use("/public", express.static(path.join(__dirname, "public")));

server.use(userRoute);
server.use(productsRoute);
server.use(categoriesRoute);
server.use(mailRoute);
server.use(orderRoute);
server.get("/", (req, res) => {
  res.send("Server is working");
});

server.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
