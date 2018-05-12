import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer';
import { fetchPeople } from '../../apiCalls/fetchPeople';
jest.mock('../../apiCalls/fetchPeople.js');
import { fetchPlanets } from '../../apiCalls/fetchPlanets';
jest.mock('../../apiCalls/fetchPlanets.js');
import { fetchVehicles } from '../../apiCalls/fetchVehicles';
jest.mock('../../apiCalls/fetchVehicles.js');
import * as mockData from '../../__mocks__/mockData';

describe('CardContainer', () => {
  let mockProps;
  let cardContainer;
  beforeEach(() => {
    // jest.resetAllMocks();
    mockProps = {
      match: { path: '/people' }
    };
    cardContainer = shallow(<CardContainer {...mockProps} />, {
      disableLifecycleMethods: true
    });
  });

  it('matches snapshot', () => {
    expect(cardContainer).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('calls getCategoryData with correct arg', async () => {
      const getCategoryData = (cardContainer.instance().getCategoryData = jest.fn());

      // why doesn't this work??
      // cardContainer = shallow(<CardContainer {...mockProps} />);
      await cardContainer.instance().componentDidMount();

      await expect(getCategoryData).toHaveBeenCalledTimes(1);
      await expect(getCategoryData).toHaveBeenCalledWith('vehicles');
    });
  });

  describe.only('getCategoryData', () => {
    let cardContainer;
    beforeEach(() => {
      cardContainer = shallow(<CardContainer {...mockProps} />, {
        disableLifecycleMethods: true
      });
    });

    it.only('if people data not loaded, calls fetchPeople based on people category', async () => {
      console.log(cardContainer.state());

      await cardContainer.instance().getCategoryData('people');
      
      console.log(cardContainer.state());

      await expect(fetchPeople).toHaveBeenCalledTimes(1);
    });

    it('if planets data not loaded, calls fetchPlanets based on planets category', async () => {
      await cardContainer.instance().getCategoryData('planets');

      await expect(fetchPlanets).toHaveBeenCalledTimes(1);
    });

    it('if vehicles data not loaded, calls fetchVehicles based on vehicles category', async () => {
      // console.log('before', cardContainer.state());

      // cardContainer = mount(<CardContainer {...mockProps} />);

      await cardContainer.instance().getCategoryData('vehicles');

      // console.log(cardContainer.debug());

      // console.log('after', cardContainer.state());

      await expect(fetchVehicles).toHaveBeenCalledTimes(1);
    });

    // it('does nothing if category is invalid', async () => {
    //   const category = 'lkjasdf';
    //   const invalidCategory = await getCategoryData(category);

    //   expect(invalidCategory).toEqual(null);
    // });
  });

  describe('renderCards', () => {
    it('returns a Card component for every cardObj', () => {
      cardContainer.setState({ vehicles: mockData.categoryData });
      const renderCards = cardContainer.instance().renderCards();

      expect(renderCards).toHaveLength(10);
    });
  });
});
