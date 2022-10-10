const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();

class SearchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spotify.com/";
  }

  myCustomGet(endpoint) {
    return this.get(
      `${endpoint}`,
      {},
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.BEARER_TOKEN,
        },
      }
    );
  }

  getFeaturedPlaylists() {
    return this.myCustomGet(`v1/browse/featured-playlists`);
  }

  getSearchForItem(trackName) {
    return this.myCustomGet(`v1/search?q=${trackName}&type=track`);
  }
}

module.exports = SearchAPI;
