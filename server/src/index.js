const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const SearchAPI = require("./datasources/searchApi");
const UserAPI = require("./datasources/userApi");
const FollowedArtistsAPI = require("./datasources/followedArtistsApi");
const AuthorizeAPI = require("./datasources/authorizeApi");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      searchAPI: new SearchAPI(),
      userAPI: new UserAPI(),
      followedArtistsAPI: new FollowedArtistsAPI(),
      authorizeAPI: new AuthorizeAPI(),
    };
  },
  context: async ({ req, res }) => {
    // Get the user token from the headers.
    const authorization = req.headers.authorization || "";

    // Add the token to the context
    return { authorization };
  },
})
  .listen()
  .then(({ url }) => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port ${url}
    📭  Query at http://localhost:${url}
`);
  });
