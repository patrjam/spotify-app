import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FeaturedPlaylist } from './components/FeaturedPlaylist/FeaturedPlaylist';
import { HomePage } from './components/HomePage/HomePage';
import { SearchTrack } from './components/SearchTrack/SearchTrack';
import { SpotifyCallback } from './components/Login/SpotifyCallback';
import { Header } from './components/Header/Header';
import { FollowedGenres } from './components/FollowedGenres/FollowedGenres';
import { Secured } from './components/Secured/Secured';

export const App = () => {
  return (
    <div>
      <div>
        {' '}
        <Header />
      </div>
      <Routes>
        <Route path={'/callback'} element={<SpotifyCallback />} />
        <Route
          path={'/'}
          element={
            <Secured>
              <HomePage />
            </Secured>
          }
        />
        <Route
          path={'/playlists'}
          element={
            <Secured>
              <FeaturedPlaylist />
            </Secured>
          }
        />
        <Route
          path={'/search-track'}
          element={
            <Secured>
              <SearchTrack />
            </Secured>
          }
        />
        <Route
          path={'/followed-genres'}
          element={
            <Secured>
              <FollowedGenres />
            </Secured>
          }
        />
      </Routes>
    </div>
  );
};
