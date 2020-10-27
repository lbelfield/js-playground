import express from 'express';

import post from '../axios/post';

const router = express.Router();
const { URL, PORT } = process.env;

router.get('/:id', async (req, res, next) => {
  try {
    const url = `${URL}${PORT}/api/users`;
    const body = { id: req.params.id, token: 2, geo: 3 };
    
    await post(url, body).then((response) => {
      res.send(`POST request to api/users with data: ${response}`);
    });

  } catch(error) {
    console.log("myError");
    next(error);
  }
});

export default router;