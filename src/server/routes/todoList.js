import express from 'express';
import createError from 'http-errors';

import get from '../axios/get';

const { TODO_LIST_URL } = process.env;

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const todoList = await get(TODO_LIST_URL);
    res.json(todoList);
  } catch (error) {
    if (error.response) { // handle axios error response
      next(createError(error.response.status, error.message));
      return;
    }
    next(error);
  }
});

router.get('/id/:id', async (req, res, next) => {
  try {
    const todoList = await get(TODO_LIST_URL);
    const queryParamsId = req.params.id;
    const todoItem = todoList.filter((item) => item.id == queryParamsId);
    res.json(todoItem);
  } catch (error) {
    if (error.response) { // handle axios error response
      next(createError(error.response.status, error.message));
      return;
    }
    next(error);
  }
});

export default router;
