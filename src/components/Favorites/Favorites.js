import React from 'react';
import PropTypes from 'prop-types';
import './Favorites.css';

const Favorites = (props) => {
  return (
    <button onClick={() => props.renderFavorites()}>
      Favorites: <span>{props.favorites.length}</span>
    </button>
  );
};

Favorites.propTypes = {
  renderFavorites: PropTypes.func,
  favorites: PropTypes.array
};

export default Favorites;
