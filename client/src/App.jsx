import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FeaturedPlaylist } from './components/FeaturedPlaylist/FeaturedPlaylist';
import { HomePage } from './components/HomePage/HomePage';
import { SearchTrack } from './components/SearchTrack/SearchTrack';
import { Header } from './components/Header/Header';
import { FollowedGenres } from './components/FollowedGenres/FollowedGenres';

export const App = () => {
  return (
    <div>
      <div>
        {' '}
        <Header />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playlists" element={<FeaturedPlaylist />} />
          <Route path="/search-track" element={<SearchTrack />} />
          <Route path="/followed-genres" element={<FollowedGenres />} />
        </Routes>
      </div>
    </div>
  );
};
