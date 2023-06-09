const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // Use the .findAll({ include: [{ model: ProductTag }, { Product }], })
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: "tagged_products" }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  // Use the .findByPk(req.body.id, { inlcude: [{ model: ProductTag }, { Product }]})
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: "tagged_products" }],
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag with that id found!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", async (req, res) => {
  // Use the .create(req.body)
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // reference activity 20 for this route
  // create a new tag
});

router.put("/:id", async (req, res) => {
  // use the .update(req.body, { where: { id: req.params.id, }, })
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tagData[0]) {
      res.status(404).json({ message: "No tag found by that id!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // reference activity 20 for this route
  // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  // use the .destroy({ where: { id: req.params.id }, });
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag found by that id!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // reference activity 24 for this route.
  // delete on tag by its `id` value
});

module.exports = router;
