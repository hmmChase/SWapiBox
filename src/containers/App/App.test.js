import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it('matches snapshot', () => {
    expect(app).toMatchSnapshot();
  });
});
