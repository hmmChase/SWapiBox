import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import apiData from './fetchData';
import { fetchPlanets } from "./planetData";

describe('planetData', () => {

  it('fetchPlanets is defined', () => {
    expect(fetchPlanets).toBeDefined();
  });

});