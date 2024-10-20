import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { Container, Row, Col } from 'reactstrap';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.movies.favorites);

  return (
    <Container>
      <h1 className="my-4">Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>You haven't added any movies to your favorites yet.</p>
      ) : (
        <Row>
          {favorites.map(movie => (
            <Col sm="6" md="4" lg="3" key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default FavoritesPage;