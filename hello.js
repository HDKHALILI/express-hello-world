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

const LANGUAGE_CODES = {
  english: "en-US",
  french: "fr-FR",
  serbian: "sr-Cryl-rs",
  spanish: "es-SP",
};

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

app.get("/:language", (req, res, next) => {
  const language = req.params.language;
  const languageCode = LANGUAGE_CODES[language];

  if (!languageCode) {
    next(new Error(`Language not supported: ${language}`));
  } else {
    res.render(`hello-world-${language}`, {
      countries: COUNTRY_DATA,
      currentPath: req.path,
      lanuage: languageCode,
    });
  }
});

// Error Handler
app.use((err, req, res, _next) => {
  console.log(err);
  res.status(404).send(err.message);
});

app.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
