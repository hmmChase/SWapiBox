import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = shallow(<Card />);
  });

  it('matches the snapshot', () => {
    expect(card).toMatchSnapshot();
  });

});