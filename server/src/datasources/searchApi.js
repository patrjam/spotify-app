const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();

class SearchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spotify.com/";
  }

  myCustomGet(endpoint, authorization) {
    return this.get(
      `${endpoint}`,
      {},
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authorization,
        },
      }
    );
  }

  getFeaturedPlaylists(authorization) {
    return this.myCustomGet(`v1/browse/featured-playlists`, authorization);
  }

  getSearchForItem(authorization, trackName) {
    return this.myCustomGet(
      `v1/search?q=${trackName}&type=track`,
      authorization
    );
  }
}

module.exports = SearchAPI;
