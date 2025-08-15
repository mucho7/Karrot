import { createServer } from 'http';
import { createYoga, createSchema } from 'graphql-yoga';

// 1. SDL (스키마 정의)
const typeDefs = /* GraphQL */ `
  type Query {
    hello: String!
    greeting(name: String!): String!
  }

  type Mutation {
    addMessage(message: String!): String!
  }
`;

// 2. 리졸버 (스키마에 맞는 실제 데이터 반환)
const resolvers = {
  Query: {
    hello: () => 'Hello GraphQL!',
    greeting: (_: unknown, args: { name: string }) => `Hello, ${args.name}!`,
  },
  Mutation: {
    addMessage: (_: unknown, args: { message: string }) => {
      console.log(`New message: ${args.message}`);
      return `Message received: ${args.message}`;
    },
  },
};

// 3. Yoga 서버 생성
const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: '/graphql',
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log('GraphQL server is running on http://localhost:4000/graphql');
});
