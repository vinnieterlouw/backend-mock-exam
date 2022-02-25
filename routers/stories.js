const { Router } = require("express");

const auth = require("../auth/middleware");

const Story = require("../models").story;

const router = new Router();
router.delete("/delete/:storyId", async (req, res, next) => {
  try {
    const { storyId } = req.params;
    const story = await Story.findByPk(storyId);
    if (!story) {
      return res.status(404).send("Story not found");
    }

    await story.destroy();

    res.send({ message: "Delete succes", storyId });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
