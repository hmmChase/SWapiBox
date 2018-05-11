import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let header;
  beforeEach(() => {
    header = shallow(<Header />);
  });

  it('matches snapshot', () => {
    expect(header).toMatchSnapshot();
  });
});
