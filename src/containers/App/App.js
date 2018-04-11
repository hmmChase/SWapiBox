import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { fetchFilmCrawl } from '../../apiData/filmCrawl';
import { fetchCategoryData } from '../../apiData/apiData';
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
  }

  setFavorites = (category) => {
    this.setState({
      category,
      categoryData: this.state.favorites
    });
  }

  updateFavorites = dataObj => {
    const alreadyThere = this.state.favorites.some(
      favorite => favorite.name === dataObj.name
    );
    if (alreadyThere) {
      const nonDuplicate = this.state.favorites.filter(
        favorite => favorite.name !== dataObj.name
      );
      this.setState({ favorites: nonDuplicate },
        localStorage.setItem('favorites', JSON.stringify(nonDuplicate))
      );
    } else {
      this.setState({
        favorites: [...this.state.favorites, dataObj]
      },
      localStorage.setItem('favorites', JSON.stringify([...this.state.favorites, dataObj]))
      );
    }
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
