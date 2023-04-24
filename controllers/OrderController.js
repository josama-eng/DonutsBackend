const Order = require("../models/Order");

async function createOrder(req, res) {
  try {
    const newOrder = await Order.create(req.body);
    newOrder
      .save()
      .then((order) => {
        res.status(220).send("ok");
      })
      .catch((error) => {
        res.status(420).send(error);
      });
  } catch (error) {
    log.error(error);
    res.status(410).send(error);
  }
}

module.exports = {
  createOrder,
};
