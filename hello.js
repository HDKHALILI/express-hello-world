const express = require("express");
const morgan = require("morgan");

const app = express();

// where to look for views
app.set("views", "./views");

// set which template enigne to be used
app.set("view engine", "pug");

// tell our where to look for static assets
app.use(express.static("public"));
app.use(morgan("common"));

// setting a view helper function, currentPathClass
// will be available to every view
app.locals.currentPathClass = (path, currentPath) => {
  return path === currentPath ? "current" : "";
};

app.get("/", (req, res) => {
  res.redirect("/english");
});

app.get("/english", (req, res) => {
  res.render("hello-world-english", {
    currentPath: req.path,
    language: "en-US",
  });
});

app.get("/french", (req, res) => {
  res.render("hello-world-french", {
    currentPath: req.path,
    language: "fr-FR",
  });
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian", {
    currentPath: req.path,
    language: "sr-Cyrl-rs",
  });
});

app.get("/spanish", (req, res) => {
  res.render("hello-world-spanish", {
    currentPath: req.path,
    language: "es-ES",
  });
});

app.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
