const express = require("express");

const app = express();

// where to look for views
app.set("views", "./views");

// set which template enigne to be used
app.set("view engine", "pug");

// tell our where to look for static assets
app.use(express.static("public"));

const writeLog = (req, res) => {
  const timeStamp = String(new Date()).substring(4, 24);
  console.log(
    `${timeStamp} ${req.method} ${req.originalUrl} ${res.statusCode}`
  );
};

app.get("/", (req, res) => {
  res.redirect("/english");
  writeLog(req, res);
});

app.get("/english", (req, res) => {
  res.render("hello-world-english");
  writeLog(req, res);
});

app.get("/french", (req, res) => {
  res.render("hello-world-french");
  writeLog(req, res);
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian");
  writeLog(req, res);
});

app.get("/spanish", (req, res) => {
  res.render("hello-world-spanish");
  writeLog(req, res);
});

app.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
