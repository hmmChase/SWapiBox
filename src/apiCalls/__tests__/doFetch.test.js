import { doFetch } from '../doFetch';

describe('doFetch', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('matches snapshot', () => {
    expect(doFetch).toMatchSnapshot();
  });
  
  it('calls fetch', async () => {
    const url = 'https://swapi.co/api';

    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      ok: true,
      json: () =>
        new Promise((resolve, reject) => {
          resolve({ response: 'mock response data' });
        })
    }));

    await doFetch(url);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('returns response data if response.ok is true', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      ok: true,
      json: () =>
        new Promise((resolve, reject) => {
          resolve({ response: 'mock data' });
        })
    }));

    await expect(doFetch()).resolves.toEqual({ response: 'mock data' });
  });

  it('throws an error if response.ok is false', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 500,
        ok: false
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
