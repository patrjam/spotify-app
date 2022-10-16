import { gql } from '@apollo/client';

export const AUTHORIZE_USER = gql`
  query Authorize($code: String, $redirectUri: String) {
    authorize(code: $code, redirect_uri: $redirectUri) {
      access_token
    }
  }
`;
