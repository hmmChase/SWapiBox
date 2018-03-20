import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Crawl from './Crawl';

describe('Crawl', () => {
  let crawl;

  beforeEach(() => {
    crawl = shallow(<Crawl />);
  });

  it('matches the snapshot', () => {
    expect(crawl).toMatchSnapshot();
  });

});