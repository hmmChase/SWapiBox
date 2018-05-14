import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import PropTypes from 'prop-types';
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
    if (this.state[category].length === 0) {
      switch (category) {
        case 'people':
          this.setState({ people: await fetchPeople() });
          break;
        case 'planets':
          this.setState({ planets: await fetchPlanets() });
          break;
        case 'vehicles':
          this.setState({ vehicles: await fetchVehicles() });
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
    this.props.updateFavAmt();
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

  createCards = () => {
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
  };

  render() {
    return (
      <section className="Card-container">
        {this.state[this.state.category].length > 0 ? (
          this.createCards()
        ) : this.state.category === 'favorites' ? (
          <p className="pretext">Favorites, you need</p>
        ) : (
          <p className="pretext">...loading</p>
        )}
      </section>
    );
  }
}

CardContainer.propTypes = {
  match: PropTypes.object.isRequired,
  updateFavAmt: PropTypes.func.isRequired
};

export default CardContainer;
