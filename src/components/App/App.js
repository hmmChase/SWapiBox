import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
// import fetchedData from '../../apiData';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      apiData: [],
      favorite: [],
      category: '',
      randomFilmCrawl: ''
    };
  }

  componentDidMount() {
    this.fetchFilmCrawl();
  }

  getRandomCrawl(data) {
    const crawls = data.results.map(result => {
      // console.log(result);
      return { 
        title: result.title,
        date: result.release_date,
        crawl: result.opening_crawl
      };
    });

    const random = Math.floor(Math.random() * crawls.length);

    return crawls[random];
  }

  async fetchFilmCrawl() {
    const root = 'https://swapi.co/api';

    // fetch(`${root}/films/`)
    //   .then(response => response.json())
    //   .then(data => this.setState({ filmCrawls: data }))
    //   .catch(error => console.log('Failed to fetch:', error));

    const response = await fetch(`${root}/films/`);
    const data = await response.json();
    const randomFilmCrawl = await this.getRandomCrawl(data);
    this.setState({ randomFilmCrawl });
  }


  renderCategory = category => {

    this.setState({
      category
    });

  }


  render() {
    return (
      <div>
        <Header renderCategory={this.renderCategory} />
        <Main
          category={this.state.category}
          randomFilmCrawl={this.state.randomFilmCrawl}
        />
      </div>
    );
  }
}

export default App;
