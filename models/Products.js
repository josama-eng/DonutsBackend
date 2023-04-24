const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const conn = require("../db/connect");
const User = require("./User");
const ObjectID = mongoose.Schema.Types.ObjectID;

const productsSchema = new mongoose.Schema(
  {
    owner: {
      type: ObjectID,
      ref: "User",
      default: null,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    image: String,
    price: {
      type: Number,
      required: true,
    },
    categoryId: {
      type: ObjectID,
      required: true,
      ref: "Category",
    },
    isTop: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports =
  mongoose.models.Products || mongoose.model("Products", productsSchema);
