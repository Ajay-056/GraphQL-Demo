import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Up and Running ...');
});

app.listen(8082, () => {
  console.log('Running on 8082...');
});
