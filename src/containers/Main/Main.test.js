import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

import * as mockData from '../../__mocks__/mockData';

let mockProps = {
  category: '',
  categoryData: mockData.categoryData,
  favorites: [],
  randomFilmCrawl: mockData.randomFilmCrawl
};

describe('Main', () => {
  let main;

  beforeEach(() => {
    main = shallow(<Main {...mockProps} />);
  });

  it('matches the snapshot', () => {
    expect(main).toMatchSnapshot();
  });

  it('matches the snapshot with category selected', () => {
    mockProps.category = 'mock category';

    expect(main).toMatchSnapshot();
  });

  it('matches the snapshot with category selected and favorites added', () => {
    mockProps.category = 'mock category';
    mockProps.favorites = mockData.favorites;

    expect(main).toMatchSnapshot();
  });

  describe('renderCategories', () => {
    it.skip('returns a Card component for every cardObj', () => {
      expect(mockProps.categoryData).toHaveLength(10);

      // console.log(main.debug());
      // console.log(() => main.renderCategories());
      expect(() => main.renderCategories()).toHaveLength(10);
    });
  });
});
