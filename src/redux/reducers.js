import { combineReducers } from 'redux';
import {
  FETCH_POPULAR_MOVIES,
  SEARCH_MOVIES,
  FETCH_MOVIE_DETAILS,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from './actions';

const initialMoviesState = {
  popularMovies: [],
  searchResults: [],
  movieDetails: null,
  favorites: []
};

const moviesReducer = (state = initialMoviesState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return { ...state, popularMovies: action.payload.results };
    case SEARCH_MOVIES:
      return { ...state, searchResults: action.payload.results };
    case FETCH_MOVIE_DETAILS:
      return { ...state, movieDetails: action.payload };
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FROM_FAVORITES:
      return { ...state, favorites: state.favorites.filter(movie => movie.id !== action.payload) };
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer
});