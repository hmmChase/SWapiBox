import { doFetch } from '../doFetch';

describe('doFetch', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({ data: 'mock data' })
      })
    );
  });

  it('matches snapshot', async () => {
    await expect(doFetch).toMatchSnapshot();
  });

  it('calls fetch', async () => {
    const url = 'https://swapi.co/api';

    await doFetch(url);
    await expect(window.fetch).toHaveBeenCalledTimes(1);
    await expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('returns response data if response.ok is true', async () => {
    await expect(doFetch()).resolves.toEqual({ data: 'mock data' });
  });

  it('throws an error if response.ok is false', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({ data: 'mock data' })
      })
    );
    const expected = new Error('Network request failed. (error: 500)');

    await expect(doFetch()).rejects.toEqual(expected);
  });

  it('throws an error if fetch fails', async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error('mock error')));
    const expected = new Error('Network request failed. (error: mock error)');

    await expect(doFetch()).rejects.toEqual(expected);
  });
});
