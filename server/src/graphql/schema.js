const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    featuredPlaylists: FeaturedPlaylists
    searchForItem(trackName: String): SearchForItem
    currentUser: User
  }

  type SearchForItem {
    tracks: SearchedTracks
  }

  type SearchedTracks {
    href: String
    items: [TrackItems]
  }

  type TrackItems {
    album: Album
    artists: [Artists]
    disc_number: Int
    explicit: Boolean
    duration_ms: Int
    external_ids: ExternalIds
    external_urls: ExternalUrls
    href: String
    id: String
    is_local: Boolean
    name: String
    popularity: Int
    preview_url: String
    track_number: Int
    type: String
    uri: String
  }

  type Album {
    album_type: String
    artists: [Artists]
    available_markets: [String]
    external_urls: ExternalUrls
    href: String
    id: String
    images: [Images]
    name: String
    release_date: Int
    release_day_precision: String
    total_tracks: Int
    type: String
    uri: String
  }

  type Artists {
    external_urls: ExternalUrls
    href: String
    id: ID
    name: String
    type: String
    uri: String
  }

  type ExternalIds {
    isrc: String
  }

  type Tracks {
    href: String
    total: Int
  }
  type ExternalUrls {
    spotify: String
  }

  type Images {
    height: Int
    url: String
    width: Int
  }

  type PlaylistItems {
    id: ID
    collaborative: Boolean
    description: String
    external_urls: ExternalUrls
    name: String
    tracks: Tracks
    images: [Images]
  }

  type Playlist {
    href: String
    items: [PlaylistItems]
  }

  type FeaturedPlaylists {
    message: String
    playlists: Playlist
  }

  type User {
    display_name: String
    external_urls: ExternalUrls
    followers: Followers
    href: String
    id: ID
    images: [Images]
    type: String
    uri: String
  }

  type Followers {
    href: String
    total: Int
  }
`;

module.exports = typeDefs;
