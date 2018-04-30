import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { fetchFilmCrawl } from '../../apiCalls/filmCrawl';
jest.mock('../../apiCalls/filmCrawl.js');
import { fetchCategoryData } from '../../apiCalls/fetchData';
jest.mock('../../apiCalls/fetchData');
import * as mockData from '../../__mocks__/mockData';

// import LocalStorage from '../../__mocks__/localStorageMock';
// global.localStorage = new LocalStorage();

describe('App', () => {
  let app;

  beforeEach(() => {
    // localStorage.clear();
    jest.clearAllMocks();
    app = shallow(<App />, { disableLifecycleMethods: true });
  });

  it('matches the snapshot', () => {
    expect(app).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('calls fetchFilmCrawl()', async () => {
      await app.instance().componentDidMount();

      expect(fetchFilmCrawl).toHaveBeenCalledTimes(1);
    });

    it('sets state.randomFilmCrawl with fetched film crawl', async () => {
      fetchFilmCrawl.mockImplementation(() => mockData.randomFilmCrawl);
      await app.instance().componentDidMount();

      expect(app.state().randomFilmCrawl).toEqual(mockData.randomFilmCrawl);
    });

    it('calls retrieveFavorites', async () => {
      const retrieveFavorites = (app.instance().retrieveFavorites = jest.fn());
      await app.instance().componentDidMount();

      expect(retrieveFavorites).toHaveBeenCalledTimes(1);
    });
  });

  describe('retrieveFavorites', () => {
    it('gets favorites from localStorage and sets to state.favorites', () => {
      localStorage.setItem('favorites', JSON.stringify(mockData.favorites));
      app.instance().retrieveFavorites();

      expect(app.state().favorites).toEqual(mockData.favorites);
    });
  });

  describe('setCategory', () => {
    it('sets state.category with passed in category', async () => {
      const mockCategory = 'mock category';
      await app.instance().setCategory(mockCategory);

      expect(app.state().category).toEqual('mock category');
    });

    it('sets state.categoryData with fetched category data', async () => {
      const mockCategoryData = [mockData.cardObj1, mockData.cardObj2];
      fetchCategoryData.mockImplementation(() => mockCategoryData);
      await app.instance().setCategory();

      expect(fetchCategoryData).toHaveBeenCalledTimes(1);
      expect(app.state().categoryData).toEqual(mockCategoryData);
    });
  });

  describe('setFavorites', () => {
    it('sets state.category with passed in category', () => {
      app.instance().setFavorites('mock category');

      expect(app.state().category).toEqual('mock category');
    });

    it('sets state.categoryData with this.state.favorites', () => {
      app.setState({ favorites: [mockData.cardObj1, mockData.cardObj2] });
      app.instance().setFavorites();

      expect(app.state().categoryData).toEqual([
        mockData.cardObj1,
        mockData.cardObj2
      ]);
    });
  });

  describe('updateFavorites', () => {
    it('calls removeFavorite if a cardObj already exists in state.favorites', () => {
      app.setState({ favorites: [mockData.cardObj1, mockData.cardObj2] });
      const removeFavorite = (app.instance().removeFavorite = jest.fn());
      app.instance().updateFavorites(mockData.cardObj1);

      expect(removeFavorite).toHaveBeenCalledTimes(1);
      expect(removeFavorite).toHaveBeenCalledWith(mockData.cardObj1);
    });

    it('calls addFavorite if a cardObj doesnt exist in state.favorites', () => {
      app.setState({ favorites: [mockData.cardObj1] });
      const addFavorite = (app.instance().addFavorite = jest.fn());
      app.instance().updateFavorites(mockData.cardObj2);

      expect(addFavorite).toHaveBeenCalledTimes(1);
      expect(addFavorite).toHaveBeenCalledWith(mockData.cardObj2);
    });
  });

  describe('removeFavorite', () => {
    it('filters out cardObj from localStorage.favorites', () => {
      localStorage.removeItem('favorites');
      localStorage.setItem(
        'favorites',
        JSON.stringify([mockData.cardObj1, mockData.cardObj2])
      );
      app.setState({ favorites: [mockData.cardObj1, mockData.cardObj2] });
      app.instance().removeFavorite(mockData.cardObj1);
      const localStorageFavorites = JSON.parse(
        localStorage.getItem('favorites')
      );

      expect(localStorageFavorites).toEqual([mockData.cardObj2]);
    });

    it('filters out cardObj from state.favorites', () => {
      app.setState({ favorites: [mockData.cardObj1, mockData.cardObj2] });
      app.instance().removeFavorite(mockData.cardObj1);

      expect(app.state().favorites).toEqual([mockData.cardObj2]);
    });
  });

  describe('addFavorite', () => {
    it('adds cardObj to localStorage.favorites', () => {
      localStorage.removeItem('favorites');
      localStorage.setItem('favorites', JSON.stringify([mockData.cardObj1]));
      app.setState({ favorites: [mockData.cardObj1] });
      app.instance().addFavorite(mockData.cardObj2);
      const localStorageFavorites = JSON.parse(
        localStorage.getItem('favorites')
      );

      expect(localStorageFavorites).toEqual([
        mockData.cardObj1,
        mockData.cardObj2
      ]);
    });

    it('adds cardObj to state.favorites', () => {
      app.setState({ favorites: [mockData.cardObj1] });
      app.instance().addFavorite(mockData.cardObj2);

      expect(app.state().favorites).toEqual([
        mockData.cardObj1,
        mockData.cardObj2
      ]);
    });
  });
});
