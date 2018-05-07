import React, { Component } from 'react';
import { fetchFilmCrawl } from '../../apiCalls/fetchFilmCrawl';

class FilmCrawl extends Component {
  constructor() {
    super();

    this.state = { FilmCrawl: {} };
  }

  componentDidMount = async () => {
    this.setState({ FilmCrawl: await fetchFilmCrawl() });
  };

  render() {
    return (
      <section className="crawl-container">
        <div className="crawl-content">
          <p>{this.state.FilmCrawl.crawl}</p>
          <p>{this.state.FilmCrawl.title}</p>
          <p>{this.state.FilmCrawl.date}</p>
        </div>
      </section>
    );
  }
}

export default FilmCrawl;
