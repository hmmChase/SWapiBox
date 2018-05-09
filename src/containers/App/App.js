import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../../components/Header/Header';
import CardContainer from '../../components/CardContainer/CardContainer';
import FilmCrawl from '../FilmCrawl/FilmCrawl';

// import { fetchPeople } from '../../apiCalls/fetchPeople';
// import { fetchPlanets } from '../../apiCalls/fetchPlanets';
// import { fetchVehicles } from '../../apiCalls/fetchVehicles';

class App extends Component {
  constructor() {
    super();

    this.state = {
      category: '',
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    };
  }

  componentDidMount = () => {};

  // setCategory = async category => {
  //   // this.setState({
  //   //   category,
  //   //   [category]: await this.fetchCategory(category)
  //   // });
  //   this.fetchCategory(category)
  // };

  // fetchCategory = async category => {
  //   switch (category) {
  //     case 'people':
  //       if (this.state.people.length === 0) {
  //         console.log('fetching');
  //         const data = await fetchPeople(category);
  //         this.setState({
  //           [category]: data
  //         });
  //       }
  //       break;
  //     case 'planets':
  //       if (this.state.planets.length === 0) {
  //         console.log('fetching');
  //         const data = await fetchPlanets(category);
  //         this.setState({
  //           [category]: data
  //         });
  //       }
  //       break;
  //     case 'vehicles':
  //       if (this.state.vehicles.length === 0) {
  //         console.log('fetching');
  //         const data = await fetchVehicles(category);
  //         this.setState({
  //           [category]: data
  //         });
  //       }
  //       break;
  //     // case 'favorites':
  //     //   return await fetchFavorites(category);
  //     default:
  //       break;
  //   }
  // };

  render() {
    return (
      <main className="App">
        <Header setCategory={this.setCategory} />
        <Route exact path="/" component={FilmCrawl} />
        <Route
          path="/people"
          render={({ match }) => (
            <CardContainer match={match} categoryData={this.state.people} />
          )}
        />
        <Route
          path="/planets"
          render={({ match }) => (
            <CardContainer match={match} categoryData={this.state.planets} />
          )}
        />
        <Route
          path="/vehicles"
          render={({ match }) => (
            <CardContainer match={match} categoryData={this.state.vehicles} />
          )}
        />
        <Route
          path="/favorites"
          render={({ match }) => (
            <CardContainer match={match} categoryData={this.state.favorites} />
          )}
        />
      </main>
    );
  }
}

export default App;
