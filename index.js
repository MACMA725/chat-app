const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 3000;

// set-up ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

//Halaman Home
app.get('/', (req, res) => {
  res.render('home', {
    title: "Halaman Home",
    layout: "layout/mian"
  })
})

//Halaman Login
app.get("/login", (reg, res) => {
  res.render('login', {
    title: "Halaman Login",
    layout: "layout/mian"
  })
})
app.listen(port, () => {
  console.log(`Runing in http://localhost:${port}`)
})