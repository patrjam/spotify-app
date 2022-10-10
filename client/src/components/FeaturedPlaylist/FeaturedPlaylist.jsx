import React from "react";
import { useQuery } from "@apollo/client";
import { PlaylistCard } from "../PlaylistCard/PlaylistCard";
import { FEATURED_PLAYLIST } from "../../queries/featured-playlist";

export const FeaturedPlaylist = () => {
  const { loading, error, data } = useQuery(FEATURED_PLAYLIST);

  return (
    <div>
      <h1>Playlists</h1>
      {data?.featuredPlaylists?.playlists.items.map((playlist, index) => (
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
