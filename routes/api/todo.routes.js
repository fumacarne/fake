const router = require('express').Router();
const todoControllers = require('../../controllers/todo.controllers.js');

router
  .route('/')
  .get(todoControllers.getAll)
  .post(todoControllers.create);

router
  .route('/:id')
  .get(todoControllers.getOne)
  .put(todoControllers.updateOne)
  .delete(todoControllers.deleteOne);

module.exports = router;
