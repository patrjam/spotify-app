const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    featuredPlaylists: FeaturedPlaylists
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

  type Items {
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
    items: [Items]
  }

  type FeaturedPlaylists {
    message: String
    playlists: Playlist
  }
`;

module.exports = typeDefs;
