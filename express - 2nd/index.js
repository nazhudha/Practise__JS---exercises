const express = require("express");
const app = express();

app.use(() => {
  console.log("We got a new Request")
})

app.listen(3000, () => {
  console.log("listening on port 3000")
})