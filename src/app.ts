import express from 'express';
import fs from 'fs';
import { ApolloServer, gql, AuthenticationError } from 'apollo-server-express';
import * as environment from 'environment';

const app = express();

console.log(environment.text);

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat('/../schema.graphql'), 'utf8')}
`;

const resolvers = {
  Query: {
    hello: (parent: any, args: any, context: any): string => {
      return `Hello!`;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
