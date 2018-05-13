import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let mockProps = {
    dataObj: {
      name: 'T-16 skyhopper',
      model: 'T-16 skyhopper',
      class: 'repulsorcraft',
      passengers: '1'
    },
    favoriteBool: false,
    toggleFavorite: jest.fn()
  };
  let card;
  beforeEach(() => {
    card = shallow(<Card {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(card).toMatchSnapshot();
  });

  it('matches snapshot when selected as favorite', () => {
    mockProps.favoriteBool = true;
    card = shallow(<Card {...mockProps} />);

    expect(card).toMatchSnapshot();
  });

  it('calls toggleFavorite with correct arg, when img is clicked', () => {
    card.find('img').simulate('click');

    expect(mockProps.toggleFavorite).toHaveBeenCalledTimes(1);
    expect(mockProps.toggleFavorite).toHaveBeenCalledWith(mockProps.dataObj);
  });
});
