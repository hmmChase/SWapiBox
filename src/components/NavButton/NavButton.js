import React from 'react';
import PropTypes from 'prop-types';
import './NavButton.css';

const NavButton = (props) => {

  return (
    <button
      onClick={() => props.setCategory(props.category)}
    >{props.category}
    </button>
  );
};

NavButton.propTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.func
};


export default NavButton;
