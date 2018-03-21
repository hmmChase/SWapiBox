import React from 'react';
import PropTypes from 'prop-types';
import './NavButton.css';

const NavButton = (props) => {

  return (
    <button
      onClick={() => props.renderCategory(props.category)}
    >{props.category}
    </button>
  );
};

NavButton.propTypes = {
  category: PropTypes.string
};


export default NavButton;
