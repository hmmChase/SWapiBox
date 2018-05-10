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
    }
  };
  let card;
  beforeEach(() => {
    card = shallow(<Card {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(card).toMatchSnapshot();
  });
});
