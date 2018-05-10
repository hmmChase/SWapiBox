import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';
import { fetchPeople } from '../../apiCalls/fetchPeople';
jest.mock('../../apiCalls/fetchPeople.js');
import { fetchPlanets } from '../../apiCalls/fetchPlanets';
jest.mock('../../apiCalls/fetchPlanets.js');
import { fetchVehicles } from '../../apiCalls/fetchVehicles';
jest.mock('../../apiCalls/fetchVehicles.js');

describe('CardContainer', () => {
  let mockProps;
  let cardContainer;
  beforeEach(() => {
    jest.resetAllMocks();
    mockProps = {
      match: { path: '/vehicles' }
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
  describe('getCategoryData', () => {
    it('if people data not loaded, calls fetchPeople based on people category', async () => {
      await cardContainer.instance().getCategoryData('people');

      await expect(fetchPeople).toHaveBeenCalledTimes(1);
    });

    it('if planets data not loaded, calls fetchPlanets based on planets category', async () => {
      await cardContainer.instance().getCategoryData('planets');

      await expect(fetchPlanets).toHaveBeenCalledTimes(1);
    });

    it('if vehicles data not loaded, calls fetchVehicles based on vehicles category', async () => {
      console.log(cardContainer.state());

      await cardContainer.instance().getCategoryData('vehicles');

      await expect(fetchVehicles).toHaveBeenCalledTimes(1);
    });

    // it('does nothing if category is invalid', async () => {
    //   const category = 'lkjasdf';
    //   const invalidCategory = await getCategoryData(category);

    //   expect(invalidCategory).toEqual(null);
    // });

    describe('renderCards', () => {
      it('returns a Card component for every cardObj', () => {
        const mockVehicleData = [
          {
            name: 'Sand Crawler',
            model: 'Digger Crawler',
            class: 'wheeled',
            passengers: '30'
          },
          {
            name: 'T-16 skyhopper',
            model: 'T-16 skyhopper',
            class: 'repulsorcraft',
            passengers: '1'
          },
          {
            name: 'X-34 landspeeder',
            model: 'X-34 landspeeder',
            class: 'repulsorcraft',
            passengers: '1'
          },
          {
            name: 'TIE/LN starfighter',
            model: 'Twin Ion Engine/Ln Starfighter',
            class: 'starfighter',
            passengers: '0'
          },
          {
            name: 'Snowspeeder',
            model: 't-47 airspeeder',
            class: 'airspeeder',
            passengers: '0'
          },
          {
            name: 'TIE bomber',
            model: 'TIE/sa bomber',
            class: 'space/planetary bomber',
            passengers: '0'
          },
          {
            name: 'AT-AT',
            model: 'All Terrain Armored Transport',
            class: 'assault walker',
            passengers: '40'
          },
          {
            name: 'AT-ST',
            model: 'All Terrain Scout Transport',
            class: 'walker',
            passengers: '0'
          },
          {
            name: 'Storm IV Twin-Pod cloud car',
            model: 'Storm IV Twin-Pod',
            class: 'repulsorcraft',
            passengers: '0'
          },
          {
            name: 'Sail barge',
            model: 'Modified Luxury Sail Barge',
            class: 'sail barge',
            passengers: '500'
          }
        ];
        cardContainer.setState({ vehicles: mockVehicleData });
        const renderCards = cardContainer.instance().renderCards();

        expect(renderCards).toHaveLength(10);
      });
    });
  });
});
