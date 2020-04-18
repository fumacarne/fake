const router = require('express').Router();
const listControllers = require('../../controllers/list.controllers.js');

router
  .route('/')
  .get(listControllers.getAll)
  .post(listControllers.create);

router
  .route('/:id')
  .get(listControllers.getOne)
  .put(listControllers.updateOne)
  .delete(listControllers.deleteOne);

router
  .route('/:id/todos')
  .get(listControllers.getTodos)
  .post(listControllers.addTodo);

module.exports = router;
