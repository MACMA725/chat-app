const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 3000;

// set-up ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);


app.get("/login", (reg, res) => {
  res.render('login', {
    title: "Halaman Login",
    layout: "layout/mian"
  })
})
app.listen(port, () => {
  console.log(`Runing in localhost:${port}`)
})