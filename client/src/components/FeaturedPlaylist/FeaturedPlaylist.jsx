import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./styles.css";
import { ReactComponent as Logo } from "../../assets/play-button.svg";

const FEATURED_PLAYLIST = gql`
  query getFeaturedPlaylists {
    featuredPlaylists {
      playlists {
        items {
          id
          name
          description
          external_urls {
            spotify
          }
          tracks {
            href
            total
          }
          images {
            url
          }
        }
      }
    }
  }
`;

export const FeaturedPlaylist = () => {
  const { loading, error, data } = useQuery(FEATURED_PLAYLIST);

  return (
    <div>
      <h1>Playlists</h1>
      {data?.featuredPlaylists?.playlists.items.map((track) => (
        <div className="container" key={track.id}>
          <div className="card-container">
            <img src={track.images[0].url} alt="" />
            <h3>{track.description}</h3>
            <h4>Tracks: {track.tracks.total}</h4>
            <a
              target="_blank"
              href={track.external_urls.spotify}
              rel="noreferrer"
            >
              <Logo className="logo" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
