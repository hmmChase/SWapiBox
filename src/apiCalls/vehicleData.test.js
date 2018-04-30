import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import apiData from './fetchData';
import { fetchVehicles } from "./vehicleData";

describe('vehicleData', () => {

  it('fetchVehicles is defined', () => {
    expect(fetchVehicles).toBeDefined();
  });
  
});