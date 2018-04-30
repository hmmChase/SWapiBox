import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import starFav from '../../images/death-star-fav.svg';
import starUnFav from '../../images/death-star-unfav.svg';

const Card = (props) => {
  const dataKeys = Object.keys(props.cardObj);

  const favoriteIcon = props.favoriteBool
    ? starFav
    : starUnFav;

  const dataElements = dataKeys.map((key, index) => {
    return key === 'name'
      ? <h2 key={index}>{props.cardObj[key]}</h2>
      : <p key={index}>{key}: <span>{props.cardObj[key]}</span></p>;
  });

  return (
    <article>
      <img
        src={favoriteIcon}
        alt="favorite"
        onClick={() => props.updateFavorites(props.cardObj)}
      />
      {dataElements}
    </article>
  );
};

Card.propTypes = {
  favoriteBool: PropTypes.bool,
  cardObj: PropTypes.object,
  updateFavorites: PropTypes.func
};

export default Card;
