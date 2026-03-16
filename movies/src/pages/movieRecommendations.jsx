import React from "react";
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getMovieRecommendations } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner';

const MovieRecommendationsPage = (props) => {
  const { id } = useParams();
  const { data, error, isPending, isError  } = useQuery({
      queryKey: ['MovieRecommendations', { id }],
      queryFn: getMovieRecommendations,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const movies = data.results;

  return (
    <PageTemplate
      title="Recommended Movies"
      movies={movies}
      action={() => null}
    />
  );

};
export default MovieRecommendationsPage;
