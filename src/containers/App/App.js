import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../../components/Header/Header';
import CardContainer from '../../components/CardContainer/CardContainer';
import FilmCrawl from '../FilmCrawl/FilmCrawl';

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
