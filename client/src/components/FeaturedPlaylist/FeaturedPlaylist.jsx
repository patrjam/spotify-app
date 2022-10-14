import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { PlaylistCard } from '../PlaylistCard/PlaylistCard';
import { FEATURED_PLAYLIST } from '../../queries/featured-playlist';
import { sortName } from '../../customFunctions/sortName';
import Asc from '../../assets/asc.svg';
import Desc from '../../assets/desc.svg';
import Sort from '../../assets/sort.svg';
import './styles.css';
import { Loading } from '../Loading/Loading';
import { Error } from '../Error/Error';

export const FeaturedPlaylist = () => {
  const { loading, error, data } = useQuery(FEATURED_PLAYLIST);
  const [sortedData, setSortedData] = useState(undefined);
  const [orderBy, setOrderBy] = useState(0);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const playlists = data?.featuredPlaylists.playlists.items.filter(
    (i) => i !== null
  );

  if (sortedData) {
    if (orderBy == 1) {
      sortName(playlists, false);
    }
    if (orderBy == 2) {
      sortName(playlists, true);
    }
  }

  const onClick = () => {
    setSortedData(true);
    setOrderBy(1);

    if (orderBy === 1) {
      return setOrderBy(2);
    }
    if (orderBy === 2) {
      return setOrderBy(0);
    }
  };

  let button;

  if (orderBy === 1) {
    button = Asc;
  } else if (orderBy === 2) {
    button = Desc;
  } else button = Sort;

  return (
    <div>
      <h1>Playlists</h1>
      <button
        className={'sort-btn'}
        onClick={onClick}
        style={{ backgroundImage: `url(${button})` }}
      ></button>
      {playlists?.map((playlist, index) => (
        <div key={index}>
          <PlaylistCard
            keyId={playlist.id}
            image={playlist.images[0].url}
            description={playlist.description}
            totalTracks={playlist.tracks.total}
            externalUrl={playlist.external_urls.spotify}
          />
        </div>
      ))}
    </div>
  );
};
