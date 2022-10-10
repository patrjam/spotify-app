const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const SearchAPI = require("./datasources/searchApi");
const UserAPI = require("./datasources/userApi");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      searchAPI: new SearchAPI(),
      userAPI: new UserAPI(),
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${url}
    📭  Query at http://localhost:${url}
`);
});
