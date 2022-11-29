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
  console.log(liftclubs);
  res.send(
    `Liftclub 1: ${liftclubs[0]._id} - ${liftclubs[0].name}, Liftclub 2: ${liftclubs[1]._id} - ${liftclubs[1].name}`
  );
});

app.get("/users", async (req, res) => {
  const users = await User.find({});
  console.log(users);
  res.send(
    `User 1: ${users[0]._id} - ${users[0].username}, User 2: ${users[1]._id} - ${users[1].username}`
  );
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
