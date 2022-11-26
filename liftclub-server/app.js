const express = require("express");
const app = express();

app.get("/r/:id", (req, res) => {
  const { id } = req.params;
  const { q, color } = req.query;
  res.send(`Request with id ${id} sent: ${q} and ${color}`);
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
