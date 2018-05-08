import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let card;
  beforeEach(() => {
    card = shallow(<Card />);
  });

  it('matches snapshot', () => {
    expect(card).toMatchSnapshot();
  });
});
