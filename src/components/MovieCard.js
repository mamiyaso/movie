import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { addToFavorites, removeFromFavorites } from '../redux/actions';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.movies.favorites);
  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <Card className="mb-4">
      <CardImg top width="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <CardBody>
        <CardTitle tag="h5">{movie.title}</CardTitle>
        <Link to={`/movie/${movie.id}`}>
          <Button color="primary" className="mr-2">Details</Button>
        </Link>
        <Button color={isFavorite ? "danger" : "success"} onClick={toggleFavorite}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </CardBody>
    </Card>
  );
};

export default MovieCard;