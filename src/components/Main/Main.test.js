import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main', () => {
  let main;

  beforeEach(() => {
    main = shallow(<Main />);
  });

  it('matches the snapshot', () => {
    expect(main).toMatchSnapshot();
  });

});