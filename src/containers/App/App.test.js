import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let app;

  beforeEach(() => {

    // , {disableLifecycleMethods: true}
    app = shallow(<App />, {disableLifecycleMethods: true});
  });

  it('matches the snapshot', () => {
    expect(app).toMatchSnapshot();
  });

  

});