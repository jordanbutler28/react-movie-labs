import React from "react";
import { getMovieCredits, getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateCastListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';

const CastListPage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    //React Query will cache result under this key
    queryKey: ['cast'],
    //function that fetches the data
    queryFn: getMovieCredits,
  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  //extracts movies array from tmdb response
  const cast = data.results;

  return (
    <PageTemplate
      title="Discover Movies"
      casts={cast}
    />
  );

};
export default CastListPage;

