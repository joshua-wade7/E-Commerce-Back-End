const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // Use the findAll({ include: [{ model: Product }]}) method here
  // Reference activity 24 for this route
  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  //Use the .findByPk(req.params.id, { include: [{ model: Product }], }) here.
  // Reference activity 24 for this route
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  //Use the .create method here i.e. .create(req.body)
  // create a new category
});

router.put("/:id", async (req, res) => {
  // Use .update(req.body, { where: { id: req.params.id, }})
  // Look at activity 20 for reference on how to setup this route.
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  // Use the .destroy method here
  // Look at activity 24 for reference on how to setup this route.
  // delete a category by its `id` value
});

module.exports = router;
