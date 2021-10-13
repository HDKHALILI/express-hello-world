const express = require("express");
const morgan = require("morgan");

const app = express();
const COUNTRY_DATA = [
  {
    path: "/english",
    flag: "us-flag.png",
    alt: "US Flag",
    title: "Go to US English site",
  },
  {
    path: "/french",
    flag: "french-flag.png",
    alt: "Drapeau de la france",
    title: "Aller sur le site français",
  },
  {
    path: "/serbian",
    flag: "serbian-flag.png",
    alt: "Застава Србије",
    title: "Идите на српски сајт",
  },
  {
    path: "/spanish",
    flag: "spain-flag.png",
    alt: "bandera de españa",
    title: "ir al sitio en español",
  },
];

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
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "en-US",
  });
});

app.get("/french", (req, res) => {
  res.render("hello-world-french", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "fr-FR",
  });
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "sr-Cyrl-rs",
  });
});

app.get("/spanish", (req, res) => {
  res.render("hello-world-spanish", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "es-ES",
  });
});

app.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
