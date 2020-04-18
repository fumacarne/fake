const db = require('../models');
const crudControllers = require('../utils/crud');

module.exports = crudControllers(db.Todo);
