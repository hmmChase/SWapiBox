import { fetchFilmCrawl } from '../fetchFilmCrawl';
import { doFetch } from '../doFetch';
jest.mock('../doFetch.js');
import * as mockData from '../../__mocks__/mockData';

describe('fetchFilmCrawl', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('matches snapshot', async () => {
    await expect(fetchFilmCrawl).toMatchSnapshot();
  });

  it('calls doFetch', async () => {
    doFetch.mockImplementation(() => Promise.resolve(mockData.fetchedFilmData));
    await fetchFilmCrawl();

    await expect(doFetch).toHaveBeenCalledTimes(1);
  });

  it('returns film crawl data and cleans it, if doFetch is successful', async () => {
    doFetch.mockImplementation(() => Promise.resolve(mockData.fetchedFilmData));

    await expect(fetchFilmCrawl()).resolves.toEqual(mockData.cleanFilmData);
  });

  it('throws an error if doFetch fails', async () => {
    const mockError = new Error('mock error');
    doFetch.mockImplementation(() => Promise.reject(new Error('mock error')));

    await expect(fetchFilmCrawl()).rejects.toEqual(mockError);
  });
});
