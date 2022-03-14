const express = require("express");
const app = express();

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manger App");
});
const PORT = 3000;

app.listen(3000, () => console.log(`Server listening on port ${PORT}...`));
