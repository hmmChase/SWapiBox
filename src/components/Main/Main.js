import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Crawl from '../Crawl/Crawl';
import './Main.css';

const Main = props => {

  const renderCategories = () => {
    return props.categoryData.map((dataObj, index) => {

      const favoriteCardNames = props.favorites.map(favorite => favorite.name);
      const favoriteCard = favoriteCardNames.includes(dataObj.name);

      return (
        <Card
          key={index}
          dataObj={dataObj}
          updateFavorites={props.updateFavorites}
          favoriteCard={favoriteCard}
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
  updateFavorites: PropTypes.func,
  randomFilmCrawl: PropTypes.object,
  favorites: PropTypes.array
};

export default Main;
