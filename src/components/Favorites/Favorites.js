import React from 'react';
import './Favorites.css';

const Favorites = (props) => {


  return (
    <button
      onClick={() => props.renderFavorites()}
    >
      Favorites: <span>{props.favorites.length}</span>
    </button>
  );
};


export default Favorites;
