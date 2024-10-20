import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, addToFavorites, removeFromFavorites } from '../redux/actions';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const MovieDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieDetails = useSelector(state => state.movies.movieDetails);
  const favorites = useSelector(state => state.movies.favorites);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const isFavorite = favorites.some(fav => fav.id === movieDetails.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movieDetails.id));
    } else {
      dispatch(addToFavorites(movieDetails));
    }
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md="4">
          <Card>
            <CardImg top width="100%" src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
          </Card>
        </Col>
        <Col md="8">
          <Card>
            <CardBody>
              <CardTitle tag="h2">{movieDetails.title}</CardTitle>
              <CardText>{movieDetails.overview}</CardText>
              <CardText>
                <strong>Release Date:</strong> {movieDetails.release_date}<br />
                <strong>Runtime:</strong> {movieDetails.runtime} minutes<br />
                <strong>Rating:</strong> {movieDetails.vote_average}/10
              </CardText>
              <Button color={isFavorite ? "danger" : "success"} onClick={toggleFavorite}>
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetailPage;