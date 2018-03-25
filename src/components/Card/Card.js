import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import starFav from '../../images/death-star-fav.svg';
import starUnFav from '../../images/death-star-unfav.svg';

const Card = (props) => {
  const dataKeys = Object.keys(props.dataObj);

  const favoriteIcon = props.favoriteCard
    ? starFav
    : starUnFav;

  const dataElements = dataKeys.map((key, index) => {
    return key === 'name'
      ? <h2 key={index}>{props.dataObj[key]}</h2>
      : <p key={index}>{key}: <span>{props.dataObj[key]}</span></p>;
  });

  return (
    <article>
      <img
        src={favoriteIcon}
        alt="favorite"
        onClick={() => props.updateFavorites(props.dataObj)}
      />
      {dataElements}
    </article>
  );
};

Card.propTypes = {
  favoriteCard: PropTypes.bool,
  dataObj: PropTypes.object,
  updateFavorites: PropTypes.func
};

export default Card;
