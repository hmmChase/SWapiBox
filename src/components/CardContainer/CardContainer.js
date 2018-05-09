import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ categoryData }) => {

  const dataCards = categoryData.map((dataObj, index) => {
    return (
      <Card
        key={'card' + index}
        dataObj={dataObj}
      />
    );
  })




  return <section className="Card-container">{dataCards}</section>;
};

export default CardContainer;
