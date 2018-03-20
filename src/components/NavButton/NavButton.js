import React from 'react';
import PropTypes from 'prop-types';
import './NavButton.css';

const NavButton = (props) => {

  return (
    <button>{props.name}</button>
  );
};

NavButton.propTypes = {
  name: PropTypes.string
};


export default NavButton;
