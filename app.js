console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

// MongoDB calling
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1 => entery codes
app.use(express.static("public")); //requests from any browsers can acess to the public folder meaning
app.use(express.json()); // it converts json fromat to objects that come from clients
app.use(express.urlencoded({ extended: true })); // it accepts HTML form (post) request it doesn`t neglect

// 2 => Session

// 3 => Views code formulating frontend in backend: BSSR
app.set("views", "views");
app.set("view engine", "ejs");

// 4 => Routing codes: Url
app.post("/create-item", function (req, res) {
  console.log("user entered /create-item");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Something went wrong");
    } else {
      res.end("successfully added");
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
        res.render("reja", { items: data });
      }
    });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

module.exports = app;
