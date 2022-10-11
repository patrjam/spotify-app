import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Howl, Howler } from 'howler';
import './styles.css';
import { TrackItemCard } from '../TrackItemCard/TrackItemCard';
import { SEARCH_TRACK } from '../../queries/search-track';

export const SearchForItem = ({ trackName }) => {
  const { loading, error, data } = useQuery(SEARCH_TRACK, {
    variables: { trackName },
  });
  const [isMusicPlayed, setIsMusicPlayed] = useState(false);

  const playPreview = (src) => {
    const sound = new Howl({ src, html5: true });
    setIsMusicPlayed(true);
    sound.play();
    setTimeout(() => {
      setIsMusicPlayed(false);
    }, 30000);
  };

  const handleOnClick = (previewUrlTrack) => {
    playPreview(previewUrlTrack);
  };

  return (
    <div id="searchForItem">
      {data?.searchForItem?.tracks.items.map((track, index) => (
        <div key={index}>
          <TrackItemCard
            albumImage={track.album.images[0].url}
            trackName={track.name}
            artistsName={track.artists[0].name}
            duration={track.duration_ms}
            popularity={track.popularity}
            albumName={track.album.name}
            onClick={
              isMusicPlayed ? null : () => handleOnClick(track.preview_url)
            }
          />
        </div>
      ))}
    </div>
  );
};
