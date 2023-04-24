const Category = require("../models/Category");

//add category

async function addCategory(req, res) {
  try {
    const newCategory = await Category.create(req.body);
    newCategory.save();
  } catch (err) {
    return res.status(422).send(err);
  }
}

//get category
async function getCategories(req, res) {
  try {
    const allCategories = await Category.find({});
    if (!allCategories.length) {
      return res.status(250).send("No categories");
    } else {
      return res.status(200).send(allCategories);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
}

async function categoryProducts(req, res) {
  let { id } = req.params;
  try {
    Category.findOne({ _id: id })
      .populate("products")
      .then((response) => {
        res.status(220).send(response);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addCategory,
  getCategories,
  categoryProducts,
};
