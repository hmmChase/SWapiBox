import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Favorites from './Favorites';
import * as mockData from '../../__mocks__/mockData';

let mockProps = {
  setFavorites: jest.fn(),
  favorites: [],
  category: 'mock category'
};

describe('Favorites', () => {
  let favorites;

  beforeEach(() => {
    favorites = shallow(<Favorites {...mockProps} />);
  });

  it('matches the snapshot', () => {
    expect(favorites).toMatchSnapshot();
  });

  it('matches the snapshot with favorites added', () => {
    mockProps.favorites = mockData.favorites;

    expect(favorites).toMatchSnapshot();
  });

  it('calls props.setFavorites when button is clicked', () => {
    const button = favorites.find('button');
    button.simulate('click');

    expect(mockProps.setFavorites).toHaveBeenCalledTimes(1);
    expect(mockProps.setFavorites).toHaveBeenCalledWith('mock category');
  });
});
