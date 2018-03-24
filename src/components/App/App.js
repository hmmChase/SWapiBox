import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { fetchFilmCrawl, fetchCategoryData } from '../../apiData';
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

  // localstorage
  // componentDidUpdate
  // check if state changed
  // set to localstorage
  // componentDidMount
  //  pull from localStorage if available

  async componentDidMount() {
    this.setState({
      randomFilmCrawl: await fetchFilmCrawl()
    });
  }

  renderCategory = async category => {
    this.setState({
      category,
      categoryData: await fetchCategoryData(category)
    });
  }

  renderFavorites = () => {
    this.setState({
      categoryData: this.state.favorites
    });
  }

  addToFavorites = dataObj => {
    this.setState({
      favorites: [...this.state.favorites, dataObj]
    });
  }

  render() {
    return (
      <div className="app">
        <Header
          renderCategory={this.renderCategory}
          renderFavorites={this.renderFavorites}
          favorites={this.state.favorites}
        />
        <Main
          category={this.state.category}
          categoryData={this.state.categoryData}
          randomFilmCrawl={this.state.randomFilmCrawl}
          addToFavorites={this.addToFavorites}
        />
      </div>
    );
  }
}

export default App;
