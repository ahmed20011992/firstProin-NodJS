const express = require("express");
const app = express();
const path = require("path");
const port = 6789;


app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "mycv-06.html"));
});

app.listen(port, () => {
    console.log(`Express server lyssnar på port ${port}`);
  });