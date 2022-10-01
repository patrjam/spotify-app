import React from "react";
import { Route, Routes } from "react-router-dom";
import { FeaturedPlaylist } from "./components/FeaturedPlaylist/FeaturedPlaylist";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FeaturedPlaylist />} />
      </Routes>
    </div>
  );
};
