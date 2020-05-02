const bodyparser = require("body-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

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
app.use(require("./routes/api"));
app.use(auth.handleErrors);

// db.sequelize.sync();
// app.listen(process.env.PORT || 8080, () => {
//   console.log(
//     `[START] app running on http://localhost:${process.env.PORT || 8080}`
//   );
// });

const csp = require("express-csp-header");
app.use(
  csp({
    policies: {
      "default-src": [csp.NONE, "https://glacial-dusk-24639.herokuapp.com/"],
      "img-src": [
        csp.SELF,
        "https://glacial-dusk-24639.herokuapp.com/favicon.ico"
      ]
    }
  })
);

// HTTP response header will be defined as:
// "Content-Security-Policy: default-src 'none'; img-src 'self';"

db.sequelize.sync().then(function() {
  app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on ${process.env.PORT || PORT}`);
  });
});
