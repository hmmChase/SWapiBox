import { fetchVehicles } from '../fetchVehicles';
import { doFetch } from '../doFetch';
jest.mock('../doFetch.js');
import * as mockData from '../../__mocks__/mockData';

describe('fetchVehicles', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('matches snapshot', async () => {
    await expect(fetchVehicles).toMatchSnapshot();
  });

  it('calls doFetch', async () => {
    doFetch.mockImplementation(() =>
      Promise.resolve(mockData.fetchedVehicleData)
    );
    await fetchVehicles();

    await expect(doFetch).toHaveBeenCalled();
  });

  it('returns vehicle data if fetches are successful', async () => {
    doFetch.mockImplementation(() =>
      Promise.resolve(mockData.fetchedVehicleData)
    );

    await expect(fetchVehicles()).resolves.toEqual(mockData.cleanVehicleData);
  });

  it('throws error if fetch fails', async () => {
    doFetch.mockImplementation(() => Promise.reject(new Error('mock error')));
    const expected = new Error('mock error');

    await expect(fetchVehicles()).rejects.toEqual(expected);
  });
});
