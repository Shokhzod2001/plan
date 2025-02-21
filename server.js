console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

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
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/", function (req, res) {
  res.render("harid");
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running succesfully on port: ${PORT}`);
});
