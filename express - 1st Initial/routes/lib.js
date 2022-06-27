const express = require('express');

const router2 = express.Router();

router2.get('/', (req, res) => {
  res.send("new library")
})

router2.get('/list', (req, res) => {
  res.send("library list")
})


module.exports = router2

