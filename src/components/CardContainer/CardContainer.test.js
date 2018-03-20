import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  let cardContainer;

  beforeEach(() => {
    cardContainer = shallow(<CardContainer />);
  });

  it('matches the snapshot', () => {
    expect(cardContainer).toMatchSnapshot();
  });

});