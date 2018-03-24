import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Crawl from '../Crawl/Crawl';
import './Main.css';

const Main = props => {

  const renderCategories = () => {
    return props.categoryData.map((dataObj, index) => {
      return (
        <Card
          key={index}
          dataObj={dataObj}
          addToFavorites={props.addToFavorites}
        />
      );
    });
  };


  return (
    <main>
      {
        !props.category
          ? <Crawl randomFilmCrawl={props.randomFilmCrawl} />
          : renderCategories()
      }
    </main>
  );
};

Main.propTypes = {
  category: PropTypes.string,
  categoryData: PropTypes.array,
  addToFavorites: PropTypes.func,
  randomFilmCrawl: PropTypes.object
};

export default Main;
