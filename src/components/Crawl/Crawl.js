import React from 'react';
import PropTypes from 'prop-types';
import './Crawl.css';

const Crawl = (props) => {
  return (
    <section className="crawl-container">
      <div className="crawl-content">
        <p>{props.randomFilmCrawl.crawl}</p>
        <p>{props.randomFilmCrawl.title}</p>
        <p>{props.randomFilmCrawl.date}</p>
      </div>
    </section>
  );
};

Crawl.propTypes = {
  randomFilmCrawl: PropTypes.object.isRequired
};

export default Crawl;
