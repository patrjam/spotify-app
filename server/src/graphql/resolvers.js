const resolvers = {
  Query: {
    featuredPlaylists: (_, __, { dataSources }) => {
      return dataSources.searchAPI.getFeaturedPlaylists();
    },
    searchForItem: (_, { trackName }, { dataSources }) => {
      return dataSources.searchAPI.getSearchForItem(trackName);
    },
    currentUser: (_, __, { dataSources }) => {
      return dataSources.userAPI.getCurrentUser();
    },
  },
};

module.exports = resolvers;
