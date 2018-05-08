import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  let cardContainer;
  beforeEach(() => {
    cardContainer = shallow(<CardContainer />);
  });

  it('matches snapshot', () => {
    expect(cardContainer).toMatchSnapshot();
  });
});
