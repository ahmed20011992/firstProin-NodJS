const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).type("text/plain").send('Hello World');
});

app.listen(5678, () => {
  console.log('Server is running and listening on http://localhost:5678');
});