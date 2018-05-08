import React, { Component } from 'react';
import { fetchFilmCrawl } from '../../apiCalls/fetchFilmCrawl';

class FilmCrawl extends Component {
  constructor() {
    super();

    this.state = {
      filmCrawl: null,
      errorStatus: null
    };
  }

  componentDidMount = () => {
    this.setFilmCrawl();
  };

  setFilmCrawl = async () => {
    try {
      this.setState({
        filmCrawl: await fetchFilmCrawl()
      });
    } catch (error) {
      this.setState({ errorStatus: error.message });
    }
  };

  renderFilmCrawl = () => {
    const { filmCrawl, errorStatus } = this.state;
    if (errorStatus) {
      return <p>{errorStatus}</p>;
    }
    if (filmCrawl) {
      return (
        <div>
          <p>{this.state.filmCrawl.crawl}</p>
          <p>{this.state.filmCrawl.title}</p>
          <p>{this.state.filmCrawl.date}</p>
        </div>
      );
    }
    return <p>...loading</p>;
  };

  render() {
    return (
      <section className="crawl-container">{this.renderFilmCrawl()}</section>
    );
  }
}

export default FilmCrawl;
