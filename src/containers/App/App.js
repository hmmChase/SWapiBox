import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../../components/Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import FilmCrawl from '../FilmCrawl/FilmCrawl';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { numFavs: 0 };
  }

  componentDidMount = () => {
    this.updateFavAmt();
  };

  updateFavAmt = () => {
    const numFavs = JSON.parse(localStorage.getItem('favorites')).length;
    this.setState({ numFavs });
  };

  render() {
    return (
      <main className="App">
        <Header numFavs={this.state.numFavs} />
        {/* <Switch> */}
        <Route exact path="/" component={FilmCrawl} />
        <Route
          path="/people"
          render={({ match }) => (
            <CardContainer match={match} updateFavAmt={this.updateFavAmt} />
          )}
        />
        <Route
          path="/planets"
          render={({ match }) => (
            <CardContainer match={match} updateFavAmt={this.updateFavAmt} />
          )}
        />
        <Route
          path="/vehicles"
          render={({ match }) => (
            <CardContainer match={match} updateFavAmt={this.updateFavAmt} />
          )}
        />
        <Route
          path="/favorites"
          render={({ match }) => (
            <CardContainer match={match} updateFavAmt={this.updateFavAmt} />
          )}
        />
        {/* </Switch> */}
      </main>
    );
  }
}

export default App;
