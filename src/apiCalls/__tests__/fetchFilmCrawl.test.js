import { fetchFilmCrawl } from '../fetchFilmCrawl';
import { doFetch } from '../doFetch';
jest.mock('../doFetch.js');

describe('fetchFilmCrawl', () => {
  let mockFetchedFilmData;
  let mockCleanFilmData;
  beforeEach(() => {
    jest.resetAllMocks();

    mockFetchedFilmData = {
      opening_crawl: 'Film Crawl',
      title: 'Movie Title',
      release_date: '1982-09-18'
    };

    mockCleanFilmData = {
      crawl: mockFetchedFilmData.opening_crawl,
      title: mockFetchedFilmData.title,
      date: mockFetchedFilmData.release_date
    };
  });

  it('matches snapshot', () => {
    expect(fetchFilmCrawl).toMatchSnapshot();
  });

  it('calls doFetch', async () => {
    doFetch.mockImplementation(() => mockFetchedFilmData);
    await fetchFilmCrawl();

    expect(doFetch).toHaveBeenCalledTimes(1);
  });

  it('returns film crawl data if doFetch successful', async () => {
    doFetch.mockImplementation(() => mockFetchedFilmData);

    expect(await fetchFilmCrawl()).toEqual(mockCleanFilmData);
  });

  it('throws an error if doFetch fails', async () => {
    const mockError = new Error('mock error');
    doFetch.mockImplementation(() => Promise.reject(new Error('mock error')));

    await expect(fetchFilmCrawl()).rejects.toEqual(mockError);
  });
});
