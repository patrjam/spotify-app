import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../../queries/current-user';
import './styles.css';

export const HomePage = () => {
  const { loading, error, data } = useQuery(CURRENT_USER);

  return (
    <div>
      <h1>Logged as:</h1>
      <div className="user-card">
        <h2>{data?.currentUser.display_name}</h2>
        <b>{`${data?.currentUser.followers.total} followers`}</b>
        <div>{`ID: ${data?.currentUser.id}`}</div>
        <br />
        <br />
        <img
          className="user-img"
          src={data?.currentUser.images[0].url}
          alt=""
        />
      </div>
    </div>
  );
};
