const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Liftclub = require("./models/liftclub");
const User = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/liftclubApp", { useNewUrlParser: true })
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/r/:id", (req, res) => {
  const { id } = req.params;
  const { q, color } = req.query;
  res.send(`Request with id ${id} sent: ${q} and ${color}`);
});

app.get("/liftclubs", async (req, res) => {
  const liftclubs = await Liftclub.find({});
  res.send(liftclubs);
});

app.get("/users", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

app.post("/liftclubs", async (req, res) => {
  const liftclub = new Liftclub(req.body);

  await liftclub.save();
  console.log("Added entry");
  res.send("Added entry");
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);

  await user
    .save()
    .then((data) => {
      console.log("Added entry");
      res.send(data);
    })
    .catch((error) => {
      console.log("Error adding entry");
      console.log(error);
      res.send(error);
    });
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
