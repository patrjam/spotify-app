import { gql } from '@apollo/client';

export const CURRENT_USER = gql`
  query getCurrentUser {
    currentUser {
      display_name
      followers {
        total
      }
      id
      images {
        url
      }
    }
  }
`;
