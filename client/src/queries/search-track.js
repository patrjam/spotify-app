import { gql } from '@apollo/client';

export const SEARCH_TRACK = gql`
  query Tracks($trackName: String) {
    searchForItem(trackName: $trackName) {
      tracks {
        items {
          name
          artists {
            name
          }
          duration_ms
          popularity
          preview_url
          album {
            name
            images {
              url
            }
          }
        }
      }
    }
  }
`;
