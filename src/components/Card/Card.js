import React from 'react';
import './Card.css';

const Card = ({ dataObj }) => {
  const dataObjKeys = Object.keys(dataObj);

  const dataElements = dataObjKeys.map((key, index) => {
    return key === 'name'
      ? <h2 key={key + index}>{dataObj[key]}</h2>
      : <p key={key + index}>{key}: <span>{dataObj[key]}</span></p>;
  });

  return (
    <article>
      {dataElements}
    </article>
  );
};

export default Card;
