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
    this.retrieveFavorites();
  }

  getCategoryData = async category => {
    console.log('category:', category);
    console.log('in code: ', this.state);
    if (this.state[category].length === 0) {
      console.log('after if conditon');
      switch (category) {
        case 'people':
          console.log('people case');
          this.setState({ people: await fetchPeople() });
          break;

        case 'planets':
          console.log('planets case');
          this.setState({ planets: await fetchPlanets() });
          break;

        case 'vehicles':
          console.log('after vehicles case');
          console.log('after vehicles func');
          this.setState({ vehicles: await fetchVehicles() });
          console.log('after vehicles setState');
          break;
        default:
          break;
      }
    }
  };

  retrieveFavorites() {
    if (localStorage.favorites) {
      const localFavorites = JSON.parse(localStorage.getItem('favorites'));
      this.setState({
        favorites: localFavorites
      });
    }
  }

  toggleFavorite = favoriteObj => {
    const alreadyFavorite = this.state.favorites.some(
      favorite => favorite.name === favoriteObj.name
    );
    if (alreadyFavorite) {
      this.removeFavorite(favoriteObj);
    } else {
      this.addFavorite(favoriteObj);
    }
  };

  removeFavorite(favoriteObj) {
    const deletedfavoriteObj = this.state.favorites.filter(
      favorite => favorite.name !== favoriteObj.name
    );
    localStorage.setItem('favorites', JSON.stringify(deletedfavoriteObj));
    this.setState({ favorites: deletedfavoriteObj });
  }

  addFavorite(favoriteObj) {
    localStorage.setItem(
      'favorites',
      JSON.stringify([...this.state.favorites, favoriteObj])
    );
    this.setState({
      favorites: [...this.state.favorites, favoriteObj]
    });
  }

  renderCards = () => {
    if (this.state[this.state.category].length > 0) {
      return this.state[this.state.category].map((dataObj, index) => {
        
        const favoriteCardNames = this.state.favorites.map(
          favorite => favorite.name
        );
        const favoriteBool = favoriteCardNames.includes(dataObj.name);
        return (
          <Card
            key={'card' + index}
            dataObj={dataObj}
            toggleFavorite={this.toggleFavorite}
            favoriteBool={favoriteBool}
          />
        );
      });
    }
    return <p>...loading</p>;
  };

  render() {
    return <section className="Card-container">{this.renderCards()}</section>;
  }
}

export default CardContainer;
