const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // Use the findAll({ include: [{ model: Product }]}) method here
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // Reference activity 24 for this route
  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  //Use the .findByPk(req.params.id, { include: [{ model: Product }], }) here.
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // Reference activity 24 for this route
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  //Use the .create method here i.e. .create(req.body)
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new category
});

router.put("/:id", async (req, res) => {
  // Use .update(req.body, { where: { id: req.params.id, }})
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: "No category with this id!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // Look at activity 20 for reference on how to setup this route.
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  // Use the .destroy method here
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // Look at activity 24 for reference on how to setup this route.
  // delete a category by its `id` value
});

module.exports = router;
