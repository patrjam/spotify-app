import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/home.svg';
import './styles.css';
import { appRoutesList } from '../../configs/appRoutesList';

export const Header = () => (
  <div>
    <div className="styled-menu">
      <div>
        <Link className="styled-logo" to={appRoutesList.homeUrl}>
          <Logo />
        </Link>
      </div>

      <div>
        <Link className="styled-option" to={appRoutesList.playlistsUrl}>
          PLAYLISTS
        </Link>
        <Link className="styled-option" to={appRoutesList.searchTrackUrl}>
          SEARCH SONG
        </Link>
        <Link className="styled-option" to={appRoutesList.followedGenresUrl}>
          FOLLOWED GENRES
        </Link>
      </div>
    </div>
  </div>
);
