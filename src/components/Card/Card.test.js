import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import * as mockData from '../../__mocks__/mockData';

let mockProps = {
  cardObj: mockData.cardObj1,
  favoriteBool: false,
  updateFavorites: jest.fn()
};

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = shallow(<Card {...mockProps} />);
  });

  it('matches the snapshot', () => {
    expect(card).toMatchSnapshot();
  });

  it('matches the snapshot when selected as a favorite', () => {
    mockProps.favoriteBool = true;

    expect(card).toMatchSnapshot();
  });

  it('calls props.updateFavorites when favorite icon is clicked', () => {
    const favoriteIcon = card.find('img');
    favoriteIcon.simulate('click');

    expect(mockProps.updateFavorites).toHaveBeenCalledTimes(1);
    expect(mockProps.updateFavorites).toHaveBeenCalledWith(mockProps.cardObj);
  });

  it;
});
