import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../redux/actions';
import MovieCard from '../components/MovieCard';
import { Container, Row, Col, Button } from 'reactstrap';

const HomePage = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(state => state.movies.popularMovies);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPopularMovies(page));
  }, [dispatch, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    // Sayfanın başına git
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Yumuşak bir kaydırma efekti için
    });
  };

  return (
    <Container>
      <h1 className="my-4">Popular Movies</h1>
      <Row>
        {popularMovies.map(movie => (
          <Col sm="6" md="4" lg="3" key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4 mb-5">
        <Button color="primary" onClick={loadMore}>Load More</Button>
      </div>
    </Container>
  );
};

export default HomePage;