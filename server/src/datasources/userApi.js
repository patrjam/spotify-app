const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();

class UserAPI extends RESTDataSource {
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

  getCurrentUser(authorization) {
    return this.myCustomGet(`v1/me`, authorization);
  }
}

module.exports = UserAPI;
