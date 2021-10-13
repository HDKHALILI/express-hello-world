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

app.get("/", (req, res) => {
  res.redirect("/english");
});

app.get("/english", (req, res) => {
  res.render("hello-world-english", {
    currentLinkIsEnglish: "current",
  });
});

app.get("/french", (req, res) => {
  res.render("hello-world-french", {
    currentLinkIsFrench: "current",
  });
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian", {
    currentLinkIsSerbian: "current",
  });
});

app.get("/spanish", (req, res) => {
  res.render("hello-world-spanish", {
    currentLinkIsSpanish: "current",
  });
});

app.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
