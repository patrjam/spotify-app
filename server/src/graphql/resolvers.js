const resolvers = {
  Query: {
    featuredPlaylists: (_, __, { dataSources, authorization }) => {
      return dataSources.searchAPI.getFeaturedPlaylists(authorization);
    },
    searchForItem: (_, { trackName }, { dataSources, authorization }) => {
      return dataSources.searchAPI.getSearchForItem(authorization, trackName);
    },
    currentUser: (_, __, { dataSources, authorization }) => {
      return dataSources.userAPI.getCurrentUser(authorization);
    },
    followedArtists: (_, __, { dataSources, authorization }) => {
      return dataSources.followedArtistsAPI.getFollowedArtists(authorization);
    },
    authorize: (_, { code, redirect_uri }, { dataSources }) => {
      return dataSources.authorizeAPI.getAuthorize(code, redirect_uri);
    },
  },
};

module.exports = resolvers;
