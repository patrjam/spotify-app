import { useQuery } from '@apollo/client';
import { CURRENT_USER } from '../../queries/current-user';
import { Error } from '../Error/Error';
import { Loading } from '../Loading/Loading';
import './styles.css';

export const HomePage = () => {
  const { error, loading, data } = useQuery(CURRENT_USER);
  if (loading) return <Loading />;
  if (error) return <Error message={error.message} error={error} />;

  return (
    <div>
      {error}
      <h1>Logged as:</h1>
      <div className={'user-card'}>
        <h2>{data?.currentUser.display_name}</h2>
        <br />
        <b>{`${data?.currentUser.followers.total} followers`}</b>
        <h3>{`ID: ${data?.currentUser.id}`}</h3>
        <br />
        <img
          className={'user-img'}
          src={data?.currentUser.images[0].url}
          alt={''}
        />
      </div>
    </div>
  );
};
