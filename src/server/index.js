import express from 'express';
import todoList from './routes/todoList';

const app = express();
const { PORT, URL } = process.env;
const port = parseInt(PORT, 10);

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
  app.use('/todo', todoList);
  app.use(express.static(__dirname + '/static'));

  app
    .listen(port, () => {
      console.log(`Example app listening at ${URL}${port}`);
    })
    .on('error', onError);

  return app;
};

export default expressServer;
