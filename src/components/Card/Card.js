import './Card.css';
import PropTypes from 'prop-types';

import React from 'react';
import starFav from '../../assets/death-star-fav.svg';
import starUnFav from '../../assets/death-star-unfav.svg';

const Card = ({ dataObj, favoriteBool, toggleFavorite }) => {
  const dataObjKeys = Object.keys(dataObj);

  const dataElements = dataObjKeys.map((key, index) => {
    return key === 'name' ? (
      <h2 key={key + index}>{dataObj[key]}</h2>
    ) : (
      <p className="dataKey" key={key + index}>
        {key}: <span>{dataObj[key]}</span>
      </p>
    );
  });

  const favoriteIcon = favoriteBool ? starFav : starUnFav;

  return (
    <article>
      <img
        src={favoriteIcon}
        alt="favorite"
        onClick={() => toggleFavorite(dataObj)}
      />
      {dataElements}
    </article>
  );
};

Card.propTypes = {
  dataObj: PropTypes.object.isRequired,
  favoriteBool: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired
};

export default Card;
