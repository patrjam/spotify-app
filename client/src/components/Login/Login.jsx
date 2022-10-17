import './styles.css';
import spotify from '../../assets/spotify_icon.svg';

const ACCOUNT_SPOTIFY = 'https://accounts.spotify.com';
const REDIRECT_URI = 'http://localhost:3000/callback';


export const Login = () => {
  return (
    <div>
      {}
      <a
        className={'login-button'}
        style={{ backgroundImage: `url(${spotify})` }}
        // eslint-disable-next-line max-len
        href={`${ACCOUNT_SPOTIFY}/authorize?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=user-follow-read&redirect_uri=${REDIRECT_URI}`}
      >
        <span className={'sp'}>LOGIN TO</span>
      </a>
    </div>
  );
};
