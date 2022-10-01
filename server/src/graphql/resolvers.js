const resolvers = {
  Query: {
    featuredPlaylists: (_, __, { dataSources }) => {
      return dataSources.searchAPI.getFeaturedPlaylists();
    },
  },
};

module.exports = resolvers;
