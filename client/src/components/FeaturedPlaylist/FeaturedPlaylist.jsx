import React, { useState, useEffect } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { PlaylistCard } from '../PlaylistCard/PlaylistCard';
import { FEATURED_PLAYLIST } from '../../queries/featured-playlist';

export const FeaturedPlaylist = () => {
  //const { loading, error, data } = useQuery(FEATURED_PLAYLIST);
  const [getPlaylists, {loading, error, data, called} ] = useLazyQuery(FEATURED_PLAYLIST);
  const [sortedData, setSortedData] = useState(undefined)

  console.log('LOADING: ',loading, 'ERROR: ',  error, 'DATA: ',  data, 'CALLED: ',called)
  

  if (loading) return <div>Loading</div>;
  if (error) return <div>{error.message}</div>;
 // console.log(await getPlaylists(), 'xx_')

 if (sortedData === undefined){
  console.log('som v undefined')
  getPlaylists()
  if ( data) {
    setSortedData(data?.featuredPlaylists.playlists.items.filter(i => i !== null))
   }
 } 
console.log('DATA: ',data, 'SORTEDDATA', sortedData)


  const sortPlaylistsName = (sortedRows) => {
     return sortedRows.sort((a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()

      if (nameA<nameB) {
        console.log('nameA<nameB')
        return -1
      }
      if (nameA>nameB){
        console.log('nameA>nameB')
        return 1
      }

      return 0
    }) 
  }
  const onClick = () => {
const playlists = [...sortPlaylistsName(sortedData)]
    setSortedData( playlists) 

    
  }


  return (
    <div>
      <h1>Playlists</h1>
      <button onClick={onClick}>SORT</button>
      <button onClick={onClick}>SORT_</button>
      <div>{new Date().getTime()}</div>
      {sortedData?.map((playlist, index) => (
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
