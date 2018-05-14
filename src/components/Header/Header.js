import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ numFavs }) => {
  return (
    <section className="Header">
      <h1 className="title">SWapiBox</h1>
      <div className="categories">
        <NavLink className="navlink" to="/people">
          People
        </NavLink>
        <NavLink className="navlink" to="/planets">
          Planets
        </NavLink>
        <NavLink className="navlink" to="/vehicles">
          Vehicles
        </NavLink>
      </div>

      <NavLink className="navlink" to="/favorites">
        Favorites:
        <span className="num-favs">{numFavs}</span>
      </NavLink>
    </section>
  );
};

Header.propTypes = {
  numFavs: PropTypes.number.isRequired
};

export default Header;
