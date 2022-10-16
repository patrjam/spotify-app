import './styles.css';

export const Error = ({ message, error }) => {
  if (message === '401: Unauthorized') {
    window.localStorage.removeItem('spotifyToken');
  }

  return (
    <div className={'error'}>
      <b>{message}</b>
    </div>
  );
};
