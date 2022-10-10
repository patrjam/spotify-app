import { gql } from '@apollo/client';

export const FEATURED_PLAYLIST = gql`
  query getFeaturedPlaylists {
    featuredPlaylists {
      playlists {
        items {
          id
          name
          description
          external_urls {
            spotify
          }
          tracks {
            href
            total
          }
          images {
            url
          }
        }
      }
    }
  }
`;
