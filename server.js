const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "..", "./shinto_react/public");

require("dotenv").config();
const auth = require("./utils/auth");
const db = require("./models");

const app = express();

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

app.use(cors());
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(require("./routes"));
app.get("/", (req, res) => {
  res.send({ message: "pong" });
});
app.use(auth.handleErrors);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
