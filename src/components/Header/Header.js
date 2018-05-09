import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ setCategory }) => {
  return (
    <section className="Header">
      <h1>SWapiBox</h1>
      <div className="categories">
        <NavLink
          className="navlink"
          to="/people"
          onClick={() => setCategory('people')}
        >
          People
        </NavLink>
        <NavLink
          className="navlink"
          to="/planets"
          onClick={() => setCategory('planets')}
        >
          Planets
        </NavLink>
        <NavLink
          className="navlink"
          to="/vehicles"
          onClick={() => setCategory('vehicles')}
        >
          Vehicles
        </NavLink>
      </div>

      <NavLink
        className="navlink"
        to="/favorites"
        onClick={() => setCategory('favorites')}
      >
        Favorites
      </NavLink>
    </section>
  );
};

export default Header;
