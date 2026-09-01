console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// MongoDb Call
const db = require("./server").db();

// 1: KIRISH CODE

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: SESSION CODE

// 3:VIEWS CODE

app.set("'views", "views");
app.set("view engine", "ejs");

// 4: ROUTING CODE

app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  db.collection("plans");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Something went wrong");
    } else {
      res.end("Successfully added");
    }
  });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;
