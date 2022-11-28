const express = require("express");
const app = express();
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/test");
}

app.get("/r/:id", (req, res) => {
  const { id } = req.params;
  const { q, color } = req.query;
  res.send(`Request with id ${id} sent: ${q} and ${color}`);
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
