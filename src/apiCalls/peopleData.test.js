// import { fetchPeople, fetchHomeWorld, fetchSpecies } from './peopleData';
import * as peopleData from './peopleData';
import { makeFetch } from './fetchData';
jest.mock('./fetchData.js');

import * as mockData from '../__mocks__/mockData';

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
    jest.clearAllMocks();
  });

  describe('fetchPeople', () => {
    it('calls makeFetch', async () => {
      makeFetch.mockImplementation(() => mockData.fetchedPeopleData);
      await fetchPeople();

      expect(makeFetch).toHaveBeenCalled();
    });

    it.only('returns people data', async () => {
      makeFetch.mockImplementation(() => mockData.fetchedPeopleData);
      console.log(makeFetch());

      peopleData.fetchHomeWorld = jest
        .fn()
        .mockImplementation(() => mockCleanHomeWorldData);
      console.log(peopleData.fetchHomeWorld());

      peopleData.fetchSpecies = await jest
        .fn()
        .mockImplementation(() => mockCleanSpeciesData);
      console.log(peopleData.fetchSpecies());

      const people = await peopleData.fetchPeople();

      console.log(await people);

      await expect(Promise.resolve(people)).resolves.toEqual([mockCleanPeopleData]);
    });
  });

  describe('fetchHomeWorld', () => {
    it('calls makeFetch', async () => {
      await fetchHomeWorld();

      expect(makeFetch).toHaveBeenCalled();
    });

    it('returns HomeWorld data', async () => {
      makeFetch.mockImplementation(() => mockData.fetchedHomeWorldData);

      expect(await fetchHomeWorld()).toEqual(mockCleanHomeWorldData);
    });
  });

  describe('fetchSpecies', () => {
    it('calls makeFetch', async () => {
      await fetchSpecies();

      expect(makeFetch).toHaveBeenCalled();
    });

    it('returns Species data', async () => {
      await makeFetch.mockImplementation(() => mockData.fetchedSpeciesData);

      await expect(await fetchSpecies()).toEqual(mockCleanSpeciesData);
    });
  });
});
