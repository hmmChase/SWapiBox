import React from 'react';
import PropTypes from 'prop-types';
import './Favorites.css';

const Favorites = (props) => {
  return (
    <button onClick={() => props.setFavorites(props.category)}>
      Favorites: <span>{props.favorites.length}</span>
    </button>
  );
};

Favorites.propTypes = {
  category: PropTypes.string.isRequired,
  setFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
};

export default Favorites;
