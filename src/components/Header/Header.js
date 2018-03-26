import React from 'react';
import PropTypes from 'prop-types';
import NavButton from '../NavButton/NavButton';
import Favorites from '../Favorites/Favorites';
import './Header.css';

const Nav = (props) => {
  return (
    <header>
      <h1>SWapiBox</h1>
      <nav>
        <NavButton category="people" setCategory={props.setCategory} />
        <NavButton category="planets" setCategory={props.setCategory} />
        <NavButton category="vehicles" setCategory={props.setCategory} />
        <Favorites
          category="favorites"
          setFavorites={props.setFavorites}
          favorites={props.favorites}
        />
      </nav>
    </header>
  );
};

Nav.propTypes = {
  setCategory: PropTypes.func,
  setFavorites: PropTypes.func,
  favorites: PropTypes.array
};

export default Nav;
