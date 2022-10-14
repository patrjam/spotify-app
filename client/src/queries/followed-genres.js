import { gql } from '@apollo/client';

export const FOLLOWED_GENRES = gql`
  query getFollowedArtists {
    followedArtists {
      artists {
        items {
          genres
        }
      }
    }
  }
`;
