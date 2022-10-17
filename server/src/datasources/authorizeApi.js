const { RESTDataSource } = require("apollo-datasource-rest");
require("dotenv").config();

const toUrlEncoded = (obj) =>
  Object.keys(obj)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
    .join("&");

class AuthorizeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://accounts.spotify.com/";
  }

  getAuthorize(code, redirect_uri) {
    console.log({ code, redirect_uri });

    return this.post(
      "api/token",
      toUrlEncoded({
        grant_type: "authorization_code",
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: code,
        redirect_uri: redirect_uri,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  }
}

module.exports = AuthorizeAPI;
