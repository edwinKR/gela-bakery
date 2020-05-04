const { ApolloServer } = require('apollo-server-cloud-functions');

const resolvers = require('./resolvers');
const typeDefs = require('./schema');

function configureServer() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({
      headers: req.headers,
      req,
      res,
    }),
    introspection: true,
    playground: true,
  });

  return apolloServer;
}

module.exports = configureServer;
