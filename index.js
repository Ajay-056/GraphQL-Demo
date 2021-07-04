import express from 'express';

import resolver from './resolver';

import schema from './schema';

import { graphqlHTTP } from 'express-graphql';

const app = express();

const root = resolver;

app.get('/', (req, res) => {
  res.send('Up and Running ...');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8082, () => {
  console.log('Running on 8082...');
});
