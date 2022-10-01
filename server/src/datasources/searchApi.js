const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();

class SearchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spotify.com/";
  }

  getFeaturedPlaylists() {
    return this.get(
      `v1/browse/featured-playlists`,
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
}

module.exports = SearchAPI;
