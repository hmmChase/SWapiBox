import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import * as mockData from '../../__mocks__/mockData';

describe('App', () => {
  let app;
  beforeEach(() => {
    jest.resetAllMocks();
    app = shallow(<App />, { disableLifecycleMethods: true });
  });

  it('matches snapshot', () => {
    expect(app).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('calls updateFavAmt', () => {
      const updateFavAmt = (app.instance().updateFavAmt = jest.fn());
      app.instance().componentDidMount();

      expect(updateFavAmt).toHaveBeenCalledTimes(1);
    });
  });

  describe('updateFavAmt', () => {
    it('sets state.numFavs with number of favorites in localStorage', () => {
      localStorage.setItem('favorites', JSON.stringify(mockData.favorites));
      app.instance().updateFavAmt();

      expect(app.state().numFavs).toEqual(2);
    });
  });
});
