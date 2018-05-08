import React from 'react';
import { shallow, mount } from 'enzyme';
import NavButton from './NavButton';

describe('NavButton', () => {
  let navButton;
  beforeEach(() => {
    navButton = shallow(<NavButton />);
  });

  it('matches snapshot', () => {
    expect(navButton).toMatchSnapshot();
  });
});
