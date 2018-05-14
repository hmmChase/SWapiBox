import { fetchPeople, fetchHomeWorld, fetchSpecies } from '../fetchPeople';
import { doFetch } from '../doFetch';
jest.mock('../doFetch.js');
import * as mockData from '../../__mocks__/mockData';

describe('peopleData', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('fetchPeople', () => {
    it('matches snapshot', async () => {
      await expect(fetchPeople).toMatchSnapshot();
    });

    it('calls doFetch', async () => {
      doFetch.mockImplementation(() =>
        Promise.resolve(mockData.fetchedPeopleData)
      );
      await fetchPeople();

      await expect(doFetch).toHaveBeenCalled();
    });

    it('returns people data if fetches are successful', async () => {
      doFetch.mockImplementation(() =>
        Promise.resolve(mockData.fetchedPeopleData)
      );

      await expect(fetchPeople()).resolves.toEqual(mockData.cleanPeopleData);
    });

    it('throws error if fetch fails', async () => {
      doFetch.mockImplementation(() => Promise.reject(new Error('mock error')));
      const expected = new Error('mock error');

      await expect(fetchPeople()).rejects.toEqual(expected);
    });
  });

  describe('fetchHomeWorld', () => {
    it('calls doFetch with correct args', async () => {
      const mockURL = 'https://swapi.co/api/mock';

      doFetch.mockImplementation(() =>
        Promise.resolve(mockData.fetchedHomeWorldData)
      );
      await fetchHomeWorld(mockURL);

      expect(doFetch).toHaveBeenCalledWith(mockURL);
    });

    it('returns HomeWorld data if fetch successful', async () => {
      doFetch.mockImplementation(() =>
        Promise.resolve(mockData.fetchedHomeWorldData)
      );

      await expect(fetchHomeWorld()).resolves.toEqual(
        mockData.cleanHomeWorldData
      );
    });

    it('throws error if fetch fails', async () => {
      doFetch.mockImplementation(() => Promise.reject(new Error('mock error')));
      const expected = new Error('mock error');

      await expect(fetchHomeWorld()).rejects.toEqual(expected);
    });
  });

  describe('fetchSpecies', () => {
    it('calls doFetch', async () => {
      doFetch.mockImplementation(() =>
        Promise.resolve(mockData.fetchedSpeciesData)
      );
      const mockURL = 'https://swapi.co/api/mock';
      await fetchSpecies(mockURL);

      expect(doFetch).toHaveBeenCalledWith(mockURL);
    });

    it('returns Species data', async () => {
      await doFetch.mockImplementation(() => mockData.fetchedSpeciesData);

      await expect(await fetchSpecies()).toEqual(mockData.cleanSpeciesData);
    });

    it('throws error if fetch fails', async () => {
      doFetch.mockImplementation(() => Promise.reject(new Error('mock error')));
      const expected = new Error('mock error');

      await expect(fetchSpecies()).rejects.toEqual(expected);
    });
  });
});
