import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { fetchFilmCrawl, fetchData } from '../../apiData';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      category: '',
      randomFilmCrawl: {},
      favorite: [],
      categoryData: []
    };
  }

  async componentDidMount() {
    this.setState({
      randomFilmCrawl: await fetchFilmCrawl()
    });
  }

  renderCategory = async (category) => {
    this.setState({
      category,
      categoryData: await fetchData(category)
    });
  }

  render() {
    return (
      <div>
        <Header renderCategory={this.renderCategory} />
        <Main
          category={this.state.category}
          categoryData={this.state.categoryData}
          randomFilmCrawl={this.state.randomFilmCrawl}
        />
      </div>
    );
  }
}

export default App;
