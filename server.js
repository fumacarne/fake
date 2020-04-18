const bodyparser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

require('dotenv').config()
const auth = require('./utils/auth');
const db = require('./models');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(require('./routes'));
app.get("/", (req,res)=>{
  res.send({message:"pong"});
});
app.use(auth.handleErrors);

db.sequelize.sync();
app.listen(process.env.PORT || 8080, () => {
  console.log(
    `[START] app running on http://localhost:${process.env.PORT || 8080}`
  );
});
