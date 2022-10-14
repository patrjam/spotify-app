import React from 'react';
import { useQuery } from '@apollo/client';
import { FOLLOWED_GENRES } from '../../queries/followed-genres';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export const FollowedGenres = () => {
  const { loading, error, data } = useQuery(FOLLOWED_GENRES);
  ChartJS.register(ArcElement, Tooltip, Legend);

  if (loading) return <div>Loading</div>;
  if (error) return <div>{error.message}</div>;

  const genres = data?.followedArtists.artists.items
    .filter((i) => i !== null)
    .map((genres) => genres.genres);

  function Counter(array) {
    array.forEach((i) => {
      i.forEach((val) => (this[val] = (this[val] || 0) + 1));
    });
  }
  const countedGenres = new Counter(genres);

  const formattedData = {
    labels: Object.keys(countedGenres).map(
      (key) => `${key} (${countedGenres[key]})`
    ),
    datasets: [
      {
        label: '# of Votes',
        data: Object.values(countedGenres),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
        <h1>Followed genres</h1>
      <Doughnut data={formattedData} />
    </div>
  );
};
