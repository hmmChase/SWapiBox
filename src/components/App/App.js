import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Favorite from '../Favorite/Favorite';
import CardContainer from '../CardContainer/CardContainer';
import ApiData from '../../ApiData/ApiData';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      apiData: [],
      favorite: []
    };
  }

  componentDidMount() {
    this.fetchApiData();
    this.fetchCrawl();
  }

  fetchApiData() {
  }


  fetchCrawl() {
    console.log('crawl');
  }





  render() {
    return (
      <main>
        <header>
          <h1>SWapiBox</h1>
          <Nav />
          <Favorite />
        </header>
        <CardContainer />
      </main>
    );
  }
}

export default App;
