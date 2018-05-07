import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import FilmCrawl from '../../components/FilmCrawl/FilmCrawl';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount = async () => {};

  render() {
    return (
      <main className="App">
        <Header />
        {/* <CardContainer /> */}
        <FilmCrawl />
      </main>
    );
  }
}

export default App;
