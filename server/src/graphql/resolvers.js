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
    followedArtists: (_, __, { dataSources }) => {
      return dataSources.followedArtistsAPI.getFollowedArtists();
    },
  },
};

module.exports = resolvers;
