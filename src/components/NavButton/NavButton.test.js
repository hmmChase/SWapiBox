import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NavButton from './NavButton';

describe('NavButton', () => {
  let navButton;

  beforeEach(() => {
    navButton = shallow(<NavButton />);
  });

  it('matches the snapshot', () => {
    expect(navButton).toMatchSnapshot();
  });

});