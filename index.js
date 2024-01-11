const express = require("express");
const connect = require("./database/data.js");
const factRoute = require("./router/factRoute");

const app = express();
const port = 8080;
app.use(express.json());

app.use(factRoute)

connect();

app.listen(port, () => {
  console.log(`back-end server is runnning on  ${port}`);
});
