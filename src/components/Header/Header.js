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
        <NavButton category="people" renderCategory={props.renderCategory} />
        <NavButton category="planets" renderCategory={props.renderCategory} />
        <NavButton category="vehicles" renderCategory={props.renderCategory} />
        <Favorites
          renderFavorites={props.renderFavorites}
          favorites={props.favorites}
        />
      </nav>
    </header>
  );
};

Nav.propTypes = {
  renderCategory: PropTypes.func,
  renderFavorites: PropTypes.func,
  favorites: PropTypes.array
};

export default Nav;
