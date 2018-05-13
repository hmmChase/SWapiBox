import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ numFavs }) => {
  return (
    <section className="Header">
      <h1>SWapiBox</h1>
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
        Favorites
        <span>:{numFavs}</span>
      </NavLink>
    </section>
  );
};

export default Header;
