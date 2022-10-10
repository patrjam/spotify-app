import React from "react";
import { Route, Routes } from "react-router-dom";
import { FeaturedPlaylist } from "./components/FeaturedPlaylist/FeaturedPlaylist";
import { SearchTrack } from "./components/SearchTrack/SearchTrack";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FeaturedPlaylist />} />
        <Route path="/playlists" element={<FeaturedPlaylist />} />
        <Route path="/search-track" element ={<SearchTrack/>} />
      </Routes>
    </div>
  );
};
