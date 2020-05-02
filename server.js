const bodyparser = require("body-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = process.env.PORT || 3000;

require("dotenv").config();
const auth = require("./utils/auth");
const db = require("./models");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(require("./routes"));
app.use(require("./routes/api"));
app.use(auth.handleErrors);

// db.sequelize.sync();
// app.listen(process.env.PORT || 8080, () => {
//   console.log(
//     `[START] app running on http://localhost:${process.env.PORT || 8080}`
//   );
// });

db.sequelize.sync().then(function() {
  app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on ${process.env.PORT || PORT}`);
  });
});
