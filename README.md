# Spotify app
This repository was created as a toy learning project for technologies as a React, Apollo GraphQL & ChartJS. Project also uses Spotify API for server in own defined schema.

# Used endpoints
- [https://api.spotify.com/v1/me](https://api.spotify.com/v1/me) for app route `/`
- [https://api.spotify.com/v1/browse/featured-playlists](https://api.spotify.com/v1/browse/featured-playlists) for app route `/playlists`
- [https://api.spotify.com/v1/search](https://api.spotify.com/v1/search) for app route `/search-track`
- [https://api.spotify.com/v1/me/following](https://api.spotify.com/v1/me/following) for app route `/followed-genres`
- [https://accounts.spotify.com/](https://accounts.spotify.com/) for Login to Spotify and return `access_token`

# Fetch data from endpoints
Connecting to data always needs to be authorized by Oauth token. Token has different roles for different data. ~~In this repository were used 2 types of `Bearer` tokens, which you need to generate.~~

_Warning_ Token expires after some time.
## ~~Generate Bearer token~~ (deprecated)

~~For standard endpoints calling, it possible to generate token here:~~

~~[https://developer.spotify.com/console/get-featured-playlists/?country=&locale=&timestamp=&limit=&offset=](https://developer.spotify.com/console/get-featured-playlists/?country=&locale=&timestamp=&limit=&offset=)~~

~~- Copy token into `.env` file in `/server/root`~~
~~- This token covers app parts: `/`, `/playlists` and `/search-track`~~

~~For `/followed-genres` is needed to generate token here [https://developer.spotify.com/console/get-following/?type=artist&after=&limit=](https://developer.spotify.com/console/get-following/?type=artist&after=&limit=) and check required scope `user-follow-read`.~~

## Login into app
- is needed to have generated `CLIENT_ID` and `CLIENT_SECRET` from [https://developer.spotify.com/](https://developer.spotify.com/).

### Generate `CLIENT_ID` & `CLIENT_SECRET`
- go to [https://developer.spotify.com/dashboard/applications](https://developer.spotify.com/dashboard/applications)
- create app with button `CREATE AN APP` and fill in mandatory fields
- copy values of generated `CLIENT_ID` and `CLIENT_SECRET`
- in edit settings add `Redirect URIs` as `http://localhost:3000/`

- copy file `.env.copy` from `/server/root` and rename it to `.env` 
- copy values of `CLIENT_ID` and `CLIENT_SECRET` into `.env` file


# App final design and implemented functionality

## Login component
![login](/documentation/screenshots/login.png)
- called if API returns 401 from the server and user is not authenticated with non expired `access_token`
- after submit button and login to `spotify.com` as standard user, logged user has generated and saved `access_token` into local storage with key `spotifyToken`
- if this token expired, user needs to click on `Login to` button again and token is automatically generated again

## Home page
![home](/documentation/screenshots/home.png)
- returns info about logged user

## Playlists page
![playlists](/documentation/screenshots/playlists.png)
- returns users playlists, it is possible to sort ASC/DESC by playlists name
- every playlist card has link button, with which is possible to open playlist on `Spotify`

## Search songs page
![search](/documentation/screenshots/search.png)
- returns searched tracks
- is possible to listen 30s song/track preview inside the page

## Followed genres
![chart](/documentation/screenshots/chart.png)
- returns users followed genres
- data shows into doughnut chart graph

## Toaster messages
![warning](/documentation/screenshots/warning.png)
- returns, if there is some error from API communication

# Frontend part
[Client readme](/client/README.md)

# Backend part
[Server readme](/server/README.md)

# Linter
This repository uses `eslint`, which is also running in pipeline after push code into branch or merge into main.