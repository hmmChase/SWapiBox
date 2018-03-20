import React from 'react';
import NavButton from '../NavButton/NavButton';
import './Nav.css';

const Nav = () => {


  return (
    <nav>
      <NavButton name="people" />
      <NavButton name="planets" />
      <NavButton name="vehicles" />
    </nav>
  );
};


export default Nav;
