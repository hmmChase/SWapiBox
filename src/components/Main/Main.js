import React, { Component } from 'react';
import Card from '../Card/Card';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <main>
        <section className="film-crawl star-wars">
          <div className=" crawl ">
            <p>{this.props.randomFilmCrawl.crawl}</p>
            <p>{this.props.randomFilmCrawl.title}</p>
            <p>{this.props.randomFilmCrawl.date}</p>
          </div>
        </section>
        <p>{this.props.category}</p>
        {/* <Card /> */}
      </main>
    );
  }

}


export default Main;
