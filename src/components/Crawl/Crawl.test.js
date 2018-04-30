import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Crawl from './Crawl';
import * as mockData from '../../__mocks__/mockData';

let mockProps = {
  randomFilmCrawl: mockData.randomFilmCrawl
};

describe('Crawl', () => {
  let crawl;

  beforeEach(() => {
    crawl = shallow(<Crawl {...mockProps} />);
  });

  it('matches the snapshot', () => {
    expect(crawl).toMatchSnapshot();
  });
});
