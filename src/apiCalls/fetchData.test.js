import { fetchCategoryData, makeFetch } from './fetchData';
import { fetchPeople } from './peopleData';
jest.mock('./peopleData');
import { fetchPlanets } from './planetData';
jest.mock('./planetData');
import { fetchVehicles } from './vehicleData';
jest.mock('./vehicleData');

describe('fetchCategoryData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls fetchPeople based on people category', () => {
    const category = 'people';
    fetchCategoryData(category);

    expect(fetchPeople).toHaveBeenCalledTimes(1);
    expect(fetchPeople).toHaveBeenCalledWith(category);
  });

  it('calls fetchPlanets based on planets category', () => {
    const category = 'planets';
    fetchCategoryData(category);

    expect(fetchPlanets).toHaveBeenCalledTimes(1);
    expect(fetchPlanets).toHaveBeenCalledWith(category);
  });

  it('calls fetchVehicles based on vehicles category', () => {
    const category = 'vehicles';
    fetchCategoryData(category);

    expect(fetchVehicles).toHaveBeenCalledTimes(1);
    expect(fetchVehicles).toHaveBeenCalledWith(category);
  });

  it('does nothing if category is invalid', async () => {
    const category = 'lkjasdf';
    const invalidCategory = await fetchCategoryData(category);

    expect(invalidCategory).toEqual('invalid category');
  });
});

describe('makeFetch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns repsonse data if response.ok is true', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      ok: true,
      json: () =>
        new Promise((resolve, reject) => {
          resolve({ data: 'mock data' });
        })
    }));

    await expect(makeFetch()).resolves.toEqual({ data: 'mock data' });
  });

  it('throws an error if response.ok is false', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 500,
      ok: false
    }));
    const expected = new Error('Network request failed. (error: 500)');

    await expect(makeFetch()).rejects.toEqual(expected);
  });

  it('throws an error if fetch fails', async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error('mock error')));

    const expected = new Error('Network request failed. (error: mock error)');

    await expect(makeFetch()).rejects.toEqual(expected);
  });
});
