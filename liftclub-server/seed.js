const mongoose = require("mongoose");
const Liftclub = require("./models/liftclub");
const User = require("./models/user");

mongoose
  .connect("mongodb://127.0.0.1:27017/liftclubApp", { useNewUrlParser: true })
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log(err);
  });

await Liftclub.deleteMany({});
await User.deleteMany({});

const seedLiftclubs = [
  {
    name: "Cameron's liftclub",
    days: [
      {
        date: new Date("2022-11-29T03:24:00"),
        timeIn: "08:00",
        timeOut: "17:00",
      },
      { date: new Date("2022-11-30T03:24:00"), timeIn: "08:00" },
      { date: new Date("2022-12-01T03:24:00"), timeOut: "17:00" },
      { date: new Date("2022-12-02T03:24:00"), timeOut: "12:00" },
    ],
    location: "-33.865310,18.623320",
    pickup_radius: 2,
  },
  {
    name: "Dani's liftclub",
    days: [
      {
        date: new Date("2022-11-29T03:24:00"),
        timeIn: "08:00",
      },
      {
        date: new Date("2022-11-03T03:24:00"),
        timeIn: "08:00",
        timeOut: "17:00",
      },
      { date: new Date("2022-12-05T03:24:00"), timeOut: "17:00" },
      {
        date: new Date("2022-12-02T03:24:00"),
        timeIn: "08:00",
        timeOut: "12:00",
      },
    ],
    location: "-33.875765,18.641273",
    pickup_radius: 1,
  },
];

const seedUsers = [
  {
    username: "cameron123",
    password: "test123",
    email: "cameron123@gmail.com",
  },
  {
    username: "dani123",
    password: "test123",
    email: "dani123@gmail.com",
  },
];

Liftclub.insertMany(seedLiftclubs)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });

User.insertMany(seedUsers)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
