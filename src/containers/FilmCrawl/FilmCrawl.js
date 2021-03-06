import React, { Component } from 'react';
import { fetchFilmCrawl } from '../../apiCalls/fetchFilmCrawl';
import './FilmCrawl.css';

class FilmCrawl extends Component {
  constructor(props) {
    super(props);

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
        <div className="crawl-container">
          <div className="crawl-content">
            <p>{this.state.filmCrawl.crawl}</p>
            <p>{this.state.filmCrawl.title}</p>
            <p>{this.state.filmCrawl.date}</p>
          </div>
        </div>
      );
    }
    return <p className="pretext">...loading</p>;
  };

  render() {
    return <section>{this.renderFilmCrawl()}</section>;
  }
}

export default FilmCrawl;
