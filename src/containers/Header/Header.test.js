import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let header;

  beforeEach(() => {
    header = shallow(<Header />);
  });

  it('matches the snapshot', () => {
    expect(header).toMatchSnapshot();
  });
});
