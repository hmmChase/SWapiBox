import { fetchPlanets, fetchResidents } from '../fetchPlanets';
import { doFetch } from '../doFetch';
jest.mock('../doFetch.js');
import * as mockData from '../../__mocks__/mockData';

describe('planetData', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe('fetchPlanets', () => {
    it('matches snapshot', async () => {
      await expect(fetchPlanets).toMatchSnapshot();
    });

    it('calls doFetch', async () => {
      doFetch.mockImplementation(() =>
        Promise.resolve(mockData.fetchedPlanetsData)
      );
      await fetchPlanets();

      await expect(doFetch).toHaveBeenCalled();
    });

    it('calls fetchResidents', async () => {
      // ????????????????

      doFetch.mockImplementation(() =>
        Promise.resolve(mockData.fetchedPlanetsData)
      );

      fetchResidents = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockData.cleanResidentsData));

      // fetchResidents = jest.fn();
      // const fetchResidents = jest.spyOn(fetchResidents);

      await fetchPlanets();

      await expect(fetchResidents).toHaveBeenCalled();
    });

    it('returns planets data if fetches are successful', async () => {
      doFetch.mockImplementation(() =>
        Promise.resolve(mockData.fetchedPlanetsData)
      );

      const fetchResidents = jest
        .fn()
        .mockImplementation(() => mockData.fetchedResidentsData);
      // console.log('fetchResidents:', fetchResidents());

      // console.log('fetchPlanets: ', await fetchPlanets());

      await expect(fetchPlanets()).resolves.toEqual(mockData.cleanPlanetsData);
    });

    it('throws error if fetch fails', async () => {
      doFetch.mockImplementation(() => Promise.reject(new Error('mock error')));
      const expected = new Error('mock error');

      await expect(fetchPlanets()).rejects.toEqual(expected);
    });
  });
  describe('fetchResidents', () => {
    it('calls doFetch with correct args', async () => {
      doFetch.mockImplementation(mockURL =>
        Promise.resolve(mockData.fetchedResidentsData)
      );
      const mockURL = 'https://swapi.co/api/mock';
      await fetchResidents(mockURL);

      expect(doFetch).toHaveBeenCalledWith(mockURL);
    });

    it('returns Residents data if fetch successful', async () => {
      doFetch.mockImplementation(() =>
        Promise.resolve(mockData.fetchedResidentsData)
      );

      await expect(fetchResidents()).resolves.toEqual(
        mockData.cleanResidentsData
      );
    });

    it('throws error if fetch fails', async () => {
      doFetch.mockImplementation(() => Promise.reject(new Error('mock error')));
      const expected = new Error('mock error');

      await expect(fetchResidents()).rejects.toEqual(expected);
    });
  });
});
