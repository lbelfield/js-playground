import express from 'express';

import apiUser from './api/users';
import todoList from './routes/todoList';
import login from './routes/login';

const app = express();
const { PORT_EXPRESS, URL } = process.env;
const port = parseInt(PORT_EXPRESS, 10);

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const expressServer = () => {
  app.use('/', express.static(__dirname + '/static', {index: 'homepage.html'}));

  app.use('/api/users', apiUser);
  app.use('/login', login);
  app.use('/todo', todoList);
  app.use(express.static(__dirname + '/static'));

  app.use((error, req, res, next) => {
    if (error.status) {
      res.status(error.status);
      res.send(error.message);
      return;
    }
    res.status(500);
    res.send(error.message);
  });

  app
      .listen(port, () => {
        console.log(`Example app listening at ${URL}${port}`);
      })
      .on('error', onError);

  return app;
};

export default expressServer;
