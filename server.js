const bodyparser = require("body-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;

require("dotenv").config();
const auth = require("./utils/auth");
const db = require("./models");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(require("./routes"));

app.get("*", (req, res) =>
  res.sendFile(path.resolve("shinto_react", "build", "index.html"))
);

app.use(auth.handleErrors);

// db.sequelize.sync();
// app.listen(process.env.PORT || 8080, () => {
//   console.log(
//     `[START] app running on http://localhost:${process.env.PORT || 8080}`
//   );
// });

db.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log(`server running on ${process.env.PORT || PORT}`);
  });
});
