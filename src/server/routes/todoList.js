import express from 'express';
import get from '../axios/get';

const { TODO_LIST_URL } = process.env;

let router = express.Router();

const todoListRouting = async () => {
  const todoList = await get(TODO_LIST_URL);

  router.get('/', (req, res) => {
    res.json(todoList);
  });
  
  router.get('/id/:id', (req, res) => {
    const queryParamsId = req.params.id;
    const todoItem = todoList.filter((item) => item.id == queryParamsId);
    res.json(todoItem);
  });
}

todoListRouting();

export default router;
