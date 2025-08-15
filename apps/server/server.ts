import { createServer } from 'http';
import { createYoga, createSchema } from 'graphql-yoga';
import { typeDefs } from './graphql/schema/merge';
import { resolvers } from './graphql/resolvers';

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: '/graphql',
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log('GraphQL server is running on http://localhost:4000/graphql');
});
