const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // Use the .findAll({ include: [{ model: ProductTag }], })
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  // Use the .findByPk(req.body.id, { inlcude: [{ model: ProductTag }]})
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post("/", async (req, res) => {
  // Use the .create(req.body)
  // reference activity 20 for this route
  // create a new tag
});

router.put("/:id", async (req, res) => {
  // use the .update(req.body, { where: { id: req.params.id, }, })
  // reference activity 20 for this route
  // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  // use the .destroy({ where: { id: req.params.id }, });
  // reference activity 24 for this route.
  // delete on tag by its `id` value
});

module.exports = router;
