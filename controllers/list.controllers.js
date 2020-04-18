const db = require('../models');
const crudControllers = require('../utils/crud');

const controllers = crudControllers(db.List);

controllers.getTodos = async (req, res) => {
  const list = await db.List.findAll({ where: { id: req.params.id } });
  const todos = await list.getTodos();
  res.json(todos);
};

controllers.addTodo = async (req, res) => {
  const { text, is_complete } = req.body;
  const list = await db.List.findAll({ where: { id: req.params.id } });
  const result = await list.createTodo({ text, is_complete });
  res.json(result);
};

module.exports = controllers;
