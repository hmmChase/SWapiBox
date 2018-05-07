import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
        <Route exact path='/' component={FilmCrawl} />
      </main>
    );
  }
}

export default App;
