import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

router.post('/', (req, res, next) => {
  const userId = req.body.id;
  const token = req.body.token;
  const geo = req.body.geo;

  res.send('Your ID' + userId + ' & Token:' + token + ' & geo:' + geo);
});

export default router;
