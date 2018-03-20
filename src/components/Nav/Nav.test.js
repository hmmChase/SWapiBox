import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav', () => {
  let nav;

  beforeEach(() => {
    nav = shallow(<Nav />);
  });

  it('matches the snapshot', () => {
    expect(nav).toMatchSnapshot();
  });

});