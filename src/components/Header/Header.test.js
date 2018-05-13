import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let header;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      numFavs: 2
    };
    header = shallow(<Header {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(header).toMatchSnapshot();
  });
});
