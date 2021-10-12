const express = require("express");

const app = express();

// where to look for views
app.set("views", "./views");

// set which template enigne to be used
app.set("view engine", "pug");

// tell our where to look for static assets
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("hello-world-english");
});

app.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
