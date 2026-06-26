require("dotenv").config();
const express = require('express');

const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello From Express!')
})

app.get('/next', (req, res) => {
  res.send("You are on the next page")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})