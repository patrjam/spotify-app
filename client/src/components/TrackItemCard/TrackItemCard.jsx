import React from 'react';
import playButton from '../../assets/play-button.svg';
import './styles.css';

export const TrackItemCard = ({
  albumImage,
  trackName,
  artistsName,
  duration,
  popularity,
  albumName,
  onClick,
}) => {
  return (
    <ul className={'list'}>
      <li className={'item'}>
        <span>
          <img src={albumImage} width={'45'} height={'45'} alt={''} />
        </span>

        <span className={'title'}>
          {' '}
          {trackName}
          <div className={'subtitle'}>{artistsName} </div>
          <div className={'subtitle'}>
            {`${Math.round((duration * 100) / 60000) / 100} min`}
            <div className={'subtitle'}>{`[Popularity]: ${popularity}`}</div>
          </div>
          {`[Album]: ${albumName}`}
        </span>

        <button
          style={{ backgroundImage: `url(${playButton})` }}
          className={'btn'}
          onClick={onClick}
        >
          {' '}
        </button>
      </li>
    </ul>
  );
};
