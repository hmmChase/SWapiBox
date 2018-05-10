import { fetchPeople, fetchHomeWorld, fetchSpecies } from '../fetchPeople';
import { doFetch } from '../doFetch';
jest.mock('../doFetch.js');

import * as mockData from '../../__mocks__/mockData';

const mockCleanHomeWorldData = {
  homeWorld: mockData.fetchedHomeWorldData.name,
  population: mockData.fetchedHomeWorldData.population
};

const mockCleanSpeciesData = {
  species: mockData.fetchedSpeciesData.name
};

const mockCleanPeopleData = {
  name: mockData.fetchedPeopleData.results[0].name,
  ...mockCleanHomeWorldData,
  ...mockCleanSpeciesData
};

describe('peopleData', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('fetchPeople', () => {
    it('calls doFetch', async () => {
      doFetch.mockImplementation(() => mockData.fetchedPeopleData);
      await fetchPeople();

      expect(doFetch).toHaveBeenCalled();
    });

    it('returns people data', async () => {
      doFetch.mockImplementation(() => mockData.fetchedPeopleData);
      console.log(doFetch());

      fetchHomeWorld = jest
        .fn()
        .mockImplementation(() => mockCleanHomeWorldData);
      console.log(fetchHomeWorld());

      fetchSpecies = await jest
        .fn()
        .mockImplementation(() => mockCleanSpeciesData);
      console.log(fetchSpecies());

      const people = await fetchPeople();

      console.log(await people);

      await expect(Promise.resolve(people)).resolves.toEqual([
        mockCleanPeopleData
      ]);
    });
  });

  describe('fetchHomeWorld', () => {
    it('calls doFetch', async () => {
      await fetchHomeWorld();

      expect(doFetch).toHaveBeenCalled();
    });

    it('returns HomeWorld data', async () => {
      doFetch.mockImplementation(() => mockData.fetchedHomeWorldData);

      expect(await fetchHomeWorld()).toEqual(mockCleanHomeWorldData);
    });
  });

  describe('fetchSpecies', () => {
    it('calls doFetch', async () => {
      await fetchSpecies();

      expect(doFetch).toHaveBeenCalled();
    });

    it('returns Species data', async () => {
      await doFetch.mockImplementation(() => mockData.fetchedSpeciesData);

      await expect(await fetchSpecies()).toEqual(mockCleanSpeciesData);
    });
  });
});
