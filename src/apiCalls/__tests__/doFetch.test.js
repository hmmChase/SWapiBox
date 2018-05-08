import { doFetch } from '../doFetch';

describe('doFetch', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('matches snapshot', () => {
    expect(doFetch).toMatchSnapshot();
  });

  it('calls fetch', async () => {
    // why is fetch called twice

    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      ok: true,
      json: () =>
        new Promise((resolve, reject) => {
          resolve({ data: 'mock response data' });
        })
    }));
    expect(doFetch()).resolves.toEqual({ data: 'mock response data' });

    const url = 'https://swapi.co/api';

    await doFetch(url);
    // expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('returns response data if response.ok is true', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      ok: true,
      json: () =>
        new Promise((resolve, reject) => {
          resolve({ data: 'mock data' });
        })
    }));

    await expect(doFetch()).resolves.toEqual({ data: 'mock data' });
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

// // reject
// window.fetch = jest.fn().mockImplementation(() => ({
//   status: 500,
//   ok: false
// }));
// const expected = new Error('Network request failed. (error: 500)');
// expect(doFetch()).rejects.toEqual(expected);
