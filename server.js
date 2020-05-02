const express = require("express");
const logger = require("morgan");
const path = require("path");

require("dotenv").config();
const auth = require("./utils/auth");
const db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes"));
app.use(auth.handleErrors);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./shinto-react/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./shinto-react/build/index.html"));
  });
}

// db.sequelize.sync();
// app.listen(process.env.PORT || 8080, () => {
//   console.log(
//     `[START] app running on http://localhost:${process.env.PORT || 8080}`
//   );
// });

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
