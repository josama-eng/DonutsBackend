const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const conn = require("../db/connect");
const User = require("./User");
const ObjectID = mongoose.Schema.Types.ObjectID;

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectID,
    },
    items: [
      {
        type: Object,
      },
    ],
    userDetails: {
      type: Object,
    },
    total: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Order || mongoose.model("Order", orderSchema);
