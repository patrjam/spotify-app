const ACCOUNT_SPOTIFY = 'https://accounts.spotify.com';
const CLIENT_ID = '68f55bba9c5640378390ab46cf5f7824';
const REDIRECT_URI = 'http://localhost:3000/callback';

export const Login = () => {
  return (
    <div>
      {}
      <a
        href={`${ACCOUNT_SPOTIFY}/authorize?response_type=code&client_id=${CLIENT_ID}&scope=user-follow-read&redirect_uri=${REDIRECT_URI}`}
      >
        LOGIN TO
      </a>
    </div>
  );
};
