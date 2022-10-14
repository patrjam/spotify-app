const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();

class FollowedArtistsAPI extends RESTDataSource {
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

  getFollowedArtists() {
    return this.myCustomGet(`v1/me/following?type=artist`);
  }

}

module.exports = FollowedArtistsAPI;
