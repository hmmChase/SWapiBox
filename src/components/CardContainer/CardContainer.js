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
      category: this.props.match.path.slice(1),
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    };
  }

  async componentDidMount() {
    await this.getCategoryData(this.state.category);
  }

  getCategoryData = async category => {
    if (this.state[category].length === 0) {
      switch (category) {
        case 'people':
          const people = await fetchPeople();
          this.setState({ people });
          break;
        case 'planets':
          const planets = await fetchPlanets();
          this.setState({ planets });
          break;
        case 'vehicles':
          const vehicles = await fetchVehicles();
          this.setState({ vehicles });
          break;
        default:
          break;
      }
    }
  };

  renderCards = () => {
    if (this.state[this.state.category].length > 0) {
      return this.state[this.state.category].map((dataObj, index) => {
        return <Card key={'card' + index} dataObj={dataObj} />;
      });
    }
    return <p>...loading</p>;
  };

  render() {
    return <section className="Card-container">{this.renderCards()}</section>;
  }
}

export default CardContainer;
