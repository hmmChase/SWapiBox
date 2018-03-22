import React, { Component } from 'react';
// import Card from '../Card/Card';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  renderCategories = () => {
    if (this.props.category === "people") {
      return this.props.categoryData.map((person, index) => {
        return (
          <article key={index}>
            <p>{person.name}</p>
            <p>{person.species}</p>
            <p>{person.homeWorld}</p>
            <p>{person.population}</p>
          </article>
        );

      });
    } else if (this.props.category === "planets") {
      return this.props.categoryData.map((planet, index) => {
        return (
          <article key={index}>
            <p>{planet.name}</p>
            <p>{planet.terrain}</p>
            <p>{planet.population}</p>
            <p>{planet.climate}</p>
            {
              planet.residents.map((resident, index) => {
                return <p key={index}>{resident}</p>;
              })
            }
          </article>
        );
      });
    } else if (this.props.category === "vehicles") {
      return this.props.categoryData.map((vehicle, index) => {
        return (
          <article key={index}>
            <p>{vehicle.name}</p>
            <p>{vehicle.model}</p>
            <p>{vehicle.class}</p>
            <p>{vehicle.passengers}</p>
          </article>
        );
      });
    }
  }

  render() {
    return (
      <main>
        {
          !this.props.category ?
            <section className="film-crawl star-wars">
              <div className="crawl">
                <p>{this.props.randomFilmCrawl.crawl}</p>
                <p>{this.props.randomFilmCrawl.title}</p>
                <p>{this.props.randomFilmCrawl.date}</p>
              </div>
            </section>
            : null
        }
        {
          this.renderCategories()
        }
      </main>
    );
  }

}


export default Main;
