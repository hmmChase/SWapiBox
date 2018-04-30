import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import Crawl from '../../components/Crawl/Crawl';
import './Main.css';

const Main = props => {
  const renderCategories = () => {
    return props.categoryData.map((cardObj, index) => {
      const favoriteCardNames = props.favorites.map(favorite => favorite.name);
      const favoriteBool = favoriteCardNames.includes(cardObj.name);

      return (
        <Card
          key={index}
          cardObj={cardObj}
          updateFavorites={props.updateFavorites}
          favoriteBool={favoriteBool}
        />
      );
    });
  };

  return (
    <main>
      {!props.category ? (
        <Crawl randomFilmCrawl={props.randomFilmCrawl} />
      ) : (
        renderCategories()
      )}
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
