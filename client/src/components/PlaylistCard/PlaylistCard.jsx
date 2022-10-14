import React from 'react';
import { ReactComponent as Logo } from '../../assets/play-button.svg';
import './styles.css'

export const PlaylistCard = ({
  keyId,
  image,
  description,
  totalTracks,
  externalUrl,
}) => {
  return (
    <div className="container" key={keyId}>
      <div className="card-container">
        <img src={image} alt="" />
        <h3>{description}</h3>
        <h4>Tracks: {totalTracks}</h4>
        <a target="_blank" href={externalUrl} rel="noreferrer">
          <Logo className="logo" />
        </a>
      </div>
    </div>
  );
};
