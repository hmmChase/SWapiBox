import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Favorites from './Favorites';

describe('Favorites', () => {
  let favorites;

  beforeEach(() => {
    favorites = shallow(<Favorites />);
  });

  it('matches the snapshot', () => {
    expect(favorites).toMatchSnapshot();
  });

});