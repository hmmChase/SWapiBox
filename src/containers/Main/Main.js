import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import Crawl from '../../components/Crawl/Crawl';
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
  category: PropTypes.string.isRequired,
  categoryData: PropTypes.array.isRequired,
  updateFavorites: PropTypes.func.isRequired,
  randomFilmCrawl: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired
};

export default Main;
