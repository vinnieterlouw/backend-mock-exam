const { Router } = require("express");
const Space = require("../models").space;
const Story = require("../models").story;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const allSpaces = await Space.findAll();
    return res.status(201).send(allSpaces);
  } catch {
    res.status(404).send("Can not find spaces");
  }
});

router.get("/details/:id", async (req, res) => {
  const { id } = req.params;

  const space = await Space.findByPk(id, {
    include: [Story],
    order: [[Story, "createdAt", "DESC"]],
  });

  if (space === null) {
    return res.status(404).send({ message: "Space not found" });
  }

  res.status(200).send({ message: "ok", space });
});

module.exports = router;
