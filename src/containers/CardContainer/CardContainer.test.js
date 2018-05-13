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
    jest.resetAllMocks();

    mockProps = {
      match: { path: '/people' },
      updateFavAmt: jest.fn()
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
      cardContainer.instance().retrieveFavorites = jest.fn();
      await cardContainer.instance().componentDidMount();

      await expect(getCategoryData).toHaveBeenCalledTimes(1);
      await expect(getCategoryData).toHaveBeenCalledWith('people');
    });

    it('calls retrieveFavorites', async () => {
      cardContainer.instance().getCategoryData = jest.fn();
      const retrieveFavorites = (cardContainer.instance().retrieveFavorites = jest.fn());
      await cardContainer.instance().componentDidMount();

      await expect(retrieveFavorites).toHaveBeenCalledTimes(1);
    });
  });

  describe('getCategoryData', () => {
    it('if people data not loaded, calls fetchPeople based on people category', async () => {
      fetchPeople.mockImplementation(() =>
        Promise.resolve(mockData.cleanPeopleData)
      );
      await cardContainer.instance().getCategoryData('people');

      await expect(fetchPeople).toHaveBeenCalledTimes(1);
    });

    it('if planets data not loaded, calls fetchPlanets based on planets category', async () => {
      fetchPlanets.mockImplementation(() =>
        Promise.resolve(mockData.cleanPlanetsData)
      );
      await cardContainer.instance().getCategoryData('planets');

      await expect(fetchPlanets).toHaveBeenCalledTimes(1);
    });

    it('if vehicles data not loaded, calls fetchVehicles based on vehicles category', async () => {
      fetchVehicles.mockImplementation(() =>
        Promise.resolve(mockData.cleanVehicleData)
      );
      await cardContainer.instance().getCategoryData('vehicles');

      await expect(fetchVehicles).toHaveBeenCalledTimes(1);
    });
  });

  describe('retrieveFavorites', () => {
    it('gets favorites from localStorage and sets to state.favorites', () => {
      localStorage.setItem('favorites', JSON.stringify(mockData.favorites));
      cardContainer.instance().retrieveFavorites();

      expect(cardContainer.state().favorites).toEqual(mockData.favorites);
    });
  });

  describe('toggleFavorite', () => {
    it('calls removeFavorite if a cardObj already exists in state.favorites', () => {
      cardContainer.setState({
        favorites: [mockData.cardObj1, mockData.cardObj2]
      });
      const removeFavorite = (cardContainer.instance().removeFavorite = jest.fn());
      cardContainer.instance().toggleFavorite(mockData.cardObj1);

      expect(removeFavorite).toHaveBeenCalledTimes(1);
      expect(removeFavorite).toHaveBeenCalledWith(mockData.cardObj1);
    });

    it('calls addFavorite if a cardObj doesnt exist in state.favorites', () => {
      cardContainer.setState({ favorites: [mockData.cardObj1] });
      const addFavorite = (cardContainer.instance().addFavorite = jest.fn());
      cardContainer.instance().toggleFavorite(mockData.cardObj2);

      expect(addFavorite).toHaveBeenCalledTimes(1);
      expect(addFavorite).toHaveBeenCalledWith(mockData.cardObj2);
    });

    it('calls updateFavAmt', () => {
      cardContainer.instance().toggleFavorite();

      expect(mockProps.updateFavAmt).toHaveBeenCalledTimes(1);
    });
  });

  describe('removeFavorite', () => {
    it('filters out cardObj from localStorage.favorites', () => {
      localStorage.removeItem('favorites');
      localStorage.setItem(
        'favorites',
        JSON.stringify([mockData.cardObj1, mockData.cardObj2])
      );
      cardContainer.setState({
        favorites: [mockData.cardObj1, mockData.cardObj2]
      });
      cardContainer.instance().removeFavorite(mockData.cardObj1);
      const localStorageFavorites = JSON.parse(
        localStorage.getItem('favorites')
      );

      expect(localStorageFavorites).toEqual([mockData.cardObj2]);
    });

    it('filters out cardObj from state.favorites', () => {
      cardContainer.setState({
        favorites: [mockData.cardObj1, mockData.cardObj2]
      });
      cardContainer.instance().removeFavorite(mockData.cardObj1);

      expect(cardContainer.state().favorites).toEqual([mockData.cardObj2]);
    });
  });

  describe('addFavorite', () => {
    it('adds cardObj to localStorage.favorites', () => {
      localStorage.removeItem('favorites');
      localStorage.setItem('favorites', JSON.stringify([mockData.cardObj1]));
      cardContainer.setState({ favorites: [mockData.cardObj1] });
      cardContainer.instance().addFavorite(mockData.cardObj2);
      const localStorageFavorites = JSON.parse(
        localStorage.getItem('favorites')
      );

      expect(localStorageFavorites).toEqual([
        mockData.cardObj1,
        mockData.cardObj2
      ]);
    });

    it('adds cardObj to state.favorites', () => {
      cardContainer.setState({ favorites: [mockData.cardObj1] });
      cardContainer.instance().addFavorite(mockData.cardObj2);

      expect(cardContainer.state().favorites).toEqual([
        mockData.cardObj1,
        mockData.cardObj2
      ]);
    });
  });

  describe('createCards', () => {
    it('returns a Card component for every cardObj', () => {
      cardContainer.setState({ people: mockData.categoryData });
      const createCards = cardContainer.instance().createCards();

      expect(createCards).toHaveLength(10);
    });
  });
});
