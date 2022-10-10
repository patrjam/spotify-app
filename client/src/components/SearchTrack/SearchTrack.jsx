import React, { useState } from "react";
import { SearchForItem } from "../SearchForItem/SearchForItem";
import "./styles.css";

export const SearchTrack = () => {
  const [searchedSong, setSearchedSong] = useState("");

  const eventChange = (event) => {
    const searchedValue = event.target.value;
    setSearchedSong(searchedValue);
  };
  return (
    <div>
      <h1>Search song</h1>
      <input
        className="searchedInput"
        placeholder="Search your track"
        onChange={eventChange}
      />
      <SearchForItem trackName={searchedSong} />
    </div>
  );
};
