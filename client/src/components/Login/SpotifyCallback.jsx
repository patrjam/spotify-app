import { useSearchParams } from 'react-router-dom';
import { AUTHORIZE_USER } from '../../queries/authorize-user';
import { useLazyQuery } from '@apollo/client';
import { Loading } from '../Loading/Loading';
import { Error } from '../Error/Error';
import { Navigate } from 'react-router-dom';

const REDIRECT_URI = 'http://localhost:3000/callback';

export const SpotifyCallback = () => {
  const [searchParams] = useSearchParams();
  const [getAuthorizeUser, { loading, error, data }] =
    useLazyQuery(AUTHORIZE_USER);
  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  if (searchParams.get('code') !== null) {
    if (data) {
      localStorage.setItem('spotifyToken', data.authorize.access_token);

      return <Navigate to={'/'} />;
    } else {
      getAuthorizeUser({
        variables: {
          code: searchParams.get('code'),
          redirectUri: REDIRECT_URI,
        },
      });
    }
  }

  return <Error message={'No code provided'}/>;
};
