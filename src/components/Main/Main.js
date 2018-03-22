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
          <article key={index}>{person.name}</article>
        );

      });
    } else if (this.props.category === "planets") {
      return this.props.categoryData.map((planet, index) => {
        return (
          <article key={index}>{planet.name}</article>
        );
      });
    } else if (this.props.category === "vehicles") {
      return this.props.categoryData.map((vehicle, index) => {
        return (
          <article key={index}>{vehicle.name}</article>
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
