import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import star from '../../images/Death-Star-icon.png';

const Card = (props) => {
  const dataKeys = Object.keys(props.dataObj);
  const dataElements = dataKeys.map((key, index) => {
    return key === 'name'
      ? <h2 key={index}>{props.dataObj[key]}</h2>
      : <p key={index}>{key}: <span>{props.dataObj[key]}</span></p>;
  });

  return (
    <article>
      <img
        src={star}
        onClick={() => props.addToFavorites(props.dataObj)}
      />
      {dataElements}
    </article>
  );
};

Card.propTypes = {
  dataObj: PropTypes.object,
  addToFavorites: PropTypes.func
};

export default Card;
