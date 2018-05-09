import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardContainer.css';
import { fetchPeople } from '../../apiCalls/fetchPeople';
import { fetchPlanets } from '../../apiCalls/fetchPlanets';
import { fetchVehicles } from '../../apiCalls/fetchVehicles';

class CardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: '',
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    };
  }
  // console.log(match.path);

  async componentDidMount() {
    this.setState(
      {
        path: this.props.match.path
      },
      () => this.fetchCategory(this.state.path)
    );
  }

  // fetchCategory = async category => {
  //   switch (category) {
  //     case '/people':
  //       if (this.state.people.length === 0) {
  //         const categoryData = await fetchPeople(category);
  //         await this.setState({
  //           people: categoryData
  //         });
  //       }
  //       break;
  //     case '/planets':
  //       if (this.state.planets.length === 0) {
  //         const categoryData = await fetchPlanets(category);
  //         this.setState({
  //           planets: categoryData
  //         });
  //       }
  //       break;
  //     case '/vehicles':
  //       if (this.state.vehicles.length === 0) {
  //         const categoryData = await fetchVehicles(category);
  //         this.setState({
  //           vehicles: categoryData
  //         });
  //       }
  //       break;
  //     // case 'favorites':
  //     //   return await fetchFavorites(category);
  //     default:
  //       break;
  //   }
  // };

  dataCards = () => {
    this.state['path'].map((dataObj, index) => {
      return <Card key={'card' + index} dataObj={dataObj} />;
    });
  };

  render() {
    return <section className="Card-container" />;
  }
}

export default CardContainer;
