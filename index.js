const express = require("express");
const app = express();
const port = 3000;

app.get("/", (reg, res) => {
  res.send("<h1>Hello World</h1>")
})
app.listen(port, () => {
  console.log(`Runing in localhost:${port}`)
})