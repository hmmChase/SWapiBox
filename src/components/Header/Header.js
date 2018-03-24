import React from 'react';
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


export default Nav;
