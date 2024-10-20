import axios from 'axios';
import alertify from 'alertifyjs';

export const FETCH_POPULAR_MOVIES = 'FETCH_POPULAR_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

const API_KEY = 'c56cdb8029529fa136c60f77d377345b';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = (page = 1) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
    dispatch({ type: FETCH_POPULAR_MOVIES, payload: response.data });
  } catch (error) {
    alertify.error('Failed to fetch popular movies');
  }
};

export const searchMovies = (query, page = 1) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
    dispatch({ type: SEARCH_MOVIES, payload: response.data });
  } catch (error) {
    alertify.error('Failed to search movies');
  }
};

export const fetchMovieDetails = (movieId) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    dispatch({ type: FETCH_MOVIE_DETAILS, payload: response.data });
  } catch (error) {
    alertify.error('Failed to fetch movie details');
  }
};

export const addToFavorites = (movie) => (dispatch) => {
  dispatch({ type: ADD_TO_FAVORITES, payload: movie });
  alertify.success('Added to favorites');
};

export const removeFromFavorites = (movieId) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_FAVORITES, payload: movieId });
  alertify.success('Removed from favorites');
};