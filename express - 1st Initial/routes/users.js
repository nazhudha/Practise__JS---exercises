const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("User New form");
});

router.post("/post", (req, res) => {
  res.send("Create yser");
});

// NOTE: Always ahve Dynamics Routes at bottom

router
   .route("/:id")
  .get((req, res) => {
    res.send(`user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`user with id ${req.params.id}`);
  });

module.exports = router;
