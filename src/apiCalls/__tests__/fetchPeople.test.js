import { fetchPeople, fetchHomeWorld, fetchSpecies } from '../fetchPeople';
import { doFetch } from '../doFetch';
jest.mock('../doFetch.js');
import * as mockData from '../../__mocks__/mockData';

describe('peopleData', () => {
  let mockCleanPeopleData;
  let mockCleanHomeWorldData;
  let mockCleanSpeciesData;

  beforeEach(() => {
    jest.resetAllMocks();

    mockCleanHomeWorldData = {
      homeWorld: 'Tatooine',
      population: '200000'
    };

    mockCleanSpeciesData = {
      species: 'Human'
    };

    mockCleanPeopleData = [
      {
        name: 'C-3PO',
        homeWorld: 'Tatooine',
        population: '200000',
        species: 'Human'
        // ...mockCleanHomeWorldData,
        // ...mockCleanSpeciesData
      }
    ];
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

    it('calls fetchHomeWorld', async () => {
      // ????????????????

      doFetch.mockImplementation(() =>
        Promise.resolve(mockData.fetchedPeopleData)
      );

      fetchHomeWorld = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockCleanHomeWorldData));
      fetchSpecies = jest
        .fn()
        .mockImplementation(() => Promise.resolve(mockCleanSpeciesData));

      // fetchHomeWorld = jest.fn();
      // const fetchHomeWorld = jest.spyOn(fetchHomeWorld);

      await fetchPeople();

      await expect(fetchHomeWorld).toHaveBeenCalled();
    });

    it('calls fetchSpecies', async () => {
      // ????????????????

      await fetchPeople();

      await expect(fetchSpecies).toHaveBeenCalled();
    });

    it('returns people data if fetches are successful', async () => {
      doFetch.mockImplementation(() =>
        Promise.resolve(mockData.fetchedPeopleData)
      );

      // fetchHomeWorld = jest
      //   .fn()
      //   .mockImplementation(() => mockCleanHomeWorldData);
      // console.log('fetchHomeWorld:', fetchHomeWorld());

      // fetchSpecies = jest
      //   .fn()
      //   .mockImplementation(() => Promise.resolve(mockCleanSpeciesData));
      // console.log('fetchSpecies:', fetchSpecies());

      console.log('fetchPeople: ', await fetchPeople());

      await expect(fetchPeople()).resolves.toEqual(mockCleanPeopleData);
    });

    it('throws error if fetch fails', async () => {
      doFetch.mockImplementation(() => Promise.reject(new Error('mock error')));
      const expected = new Error('mock error');

      await expect(fetchPeople()).rejects.toEqual(expected);
    });
  });

  describe('fetchHomeWorld', () => {
    it('calls doFetch with correct args', async () => {
      doFetch.mockImplementation(mockURL =>
        Promise.resolve(mockData.fetchedHomeWorldData)
      );
      const mockURL = 'https://swapi.co/api/mock';
      await fetchHomeWorld(mockURL);

      expect(doFetch).toHaveBeenCalledWith(mockURL);
    });

    it('returns HomeWorld data if fetch successful', async () => {
      doFetch.mockImplementation(() =>
        Promise.resolve(mockData.fetchedHomeWorldData)
      );

      await expect(fetchHomeWorld()).resolves.toEqual(mockCleanHomeWorldData);
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

      await expect(await fetchSpecies()).toEqual(mockCleanSpeciesData);
    });

    it('throws error if fetch fails', async () => {
      doFetch.mockImplementation(() => Promise.reject(new Error('mock error')));
      const expected = new Error('mock error');

      await expect(fetchSpecies()).rejects.toEqual(expected);
    });
  });
});

// const fetchHomeWorld = jest
//   .fn()
//   .mockImplementation(() =>
//     Promise.resolve(mockData.fetchedHomeWorldData)
//   );
// const fetchSpecies = jest
//   .fn()
//   .mockImplementation(() => Promise.resolve(mockData.fetchedSpeciesData));
