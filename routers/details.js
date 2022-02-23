const { Router } = require("express");
const Space = require("../models").space;
const Story = require("../models").story;

const router = new Router();

router.get("/:id", async (req, res, next) => {
  try {
    const spaceId = parseInt(req.params.id);
    const spaces = await Space.findByPk(spaceId, {
      include: [Category],
    });
    if (product) {
      res.send(product);
    } else {
      res.status(400).send("Product not found");
    }
  } catch (err) {
    console.log(err.message);
    next(err);
  }
});

module.exports = router;
