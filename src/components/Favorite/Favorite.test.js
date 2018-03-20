import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Favorite from './Favorite';

describe('Favorite', () => {
  let favorite;

  beforeEach(() => {
    favorite = shallow(<Favorite />);
  });

  it('matches the snapshot', () => {
    expect(favorite).toMatchSnapshot();
  });

});