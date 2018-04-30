import React from 'react';
import PropTypes from 'prop-types';
import './Favorites.css';

const Favorites = props => {
  return (
    <button onClick={() => props.setFavorites(props.category)}>
      Favorites: <span>{props.favorites.length}</span>
    </button>
  );
};

Favorites.propTypes = {
  category: PropTypes.string,
  setFavorites: PropTypes.func,
  favorites: PropTypes.array
};

export default Favorites;
