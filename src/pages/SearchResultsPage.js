import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../redux/actions';
import MovieCard from '../components/MovieCard';
import { Container, Row, Col, Button } from 'reactstrap';

const SearchResultsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchResults = useSelector(state => state.movies.searchResults);
  const [page, setPage] = useState(1);

  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    if (query) {
      dispatch(searchMovies(query, page));
    }
  }, [dispatch, query, page]);

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
      <h1 className="my-4">Search Results for "{query}"</h1>
      <Row>
        {searchResults.map(movie => (
          <Col sm="6" md="4" lg="3" key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
      {searchResults.length > 0 && (
        <div className="text-center mt-4 mb-5">
          <Button color="primary" onClick={loadMore}>Load More</Button>
        </div>
      )}
    </Container>
  );
};

export default SearchResultsPage;