import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { fetchFilmCrawl } from '../../apiCalls/filmCrawl';
import { fetchCategoryData } from '../../apiCalls/fetchData';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      category: '',
      randomFilmCrawl: {},
      favorites: [],
      categoryData: []
    };
  }

  

  async componentDidMount() {
    this.setState({
      randomFilmCrawl: await fetchFilmCrawl()
    });
    this.retrieveFavorites();
  }

  retrieveFavorites() {
    if (localStorage.favorites) {
      const localFavorites = JSON.parse(localStorage.getItem('favorites'));
      this.setState({
        favorites: localFavorites
      });
    }
  }

  setCategory = async category => {
    this.setState({
      category,
      categoryData: await fetchCategoryData(category)
    });
  };

  setFavorites = category => {
    this.setState({
      category,
      categoryData: this.state.favorites
    });
  };

  updateFavorites = cardObj => {
    const alreadyFavorite = this.state.favorites.some(
      favorite => favorite.name === cardObj.name
    );
    if (alreadyFavorite) {
      this.removeFavorite(cardObj);
    } else {
      this.addFavorite(cardObj);
    }
  };

  removeFavorite(cardObj) {
    const deletedCardObj = this.state.favorites.filter(
      favorite => favorite.name !== cardObj.name
    );
    localStorage.setItem('favorites', JSON.stringify(deletedCardObj));
    this.setState({ favorites: deletedCardObj });
  }

  addFavorite(cardObj) {
    localStorage.setItem(
      'favorites',
      JSON.stringify([...this.state.favorites, cardObj])
    );
    this.setState({
      favorites: [...this.state.favorites, cardObj]
    });
  }

  render() {
    return (
      <div className="app">
        <Header
          setCategory={this.setCategory}
          setFavorites={this.setFavorites}
          favorites={this.state.favorites}
        />
        <Main
          category={this.state.category}
          categoryData={this.state.categoryData}
          randomFilmCrawl={this.state.randomFilmCrawl}
          updateFavorites={this.updateFavorites}
          favorites={this.state.favorites}
        />
      </div>
    );
  }
}

export default App;
