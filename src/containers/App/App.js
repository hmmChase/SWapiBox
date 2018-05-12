import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../../components/Header/Header';
import CardContainer from '../../components/CardContainer/CardContainer';
import FilmCrawl from '../FilmCrawl/FilmCrawl';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount = () => {};

  numFavorites = () => {
    
  }

  // setFavorites = category => {
  //   this.setState({
  //     category,
  //     categoryData: this.state.favorites
  //   });
  // };

  render() {
    return (
      <main className="App">
        <Header />
        {/* <Switch> */}
        <Route exact path="/" component={FilmCrawl} />
        <Route
          path="/people"
          render={({ match }) => <CardContainer match={match} />}
        />
        <Route
          path="/planets"
          render={({ match }) => <CardContainer match={match} />}
        />
        <Route
          path="/vehicles"
          render={({ match }) => <CardContainer match={match} />}
        />
        <Route
          path="/favorites"
          render={({ match }) => <CardContainer match={match} />}
        />
        {/* </Switch> */}
      </main>
    );
  }
}

export default App;
