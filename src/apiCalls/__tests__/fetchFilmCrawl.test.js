import { fetchFilmCrawl } from '../fetchFilmCrawl';
import { doFetch } from '../doFetch';
jest.mock('../doFetch.js');

const mockFetchedFilmData = {
  opening_crawl: 'Film Crawl',
  title: 'Movie Title',
  release_date: '1982-09-18'
};

const mockCleanFilmData = {
  crawl: mockFetchedFilmData.opening_crawl,
  title: mockFetchedFilmData.title,
  date: mockFetchedFilmData.release_date
};

describe('fetchFilmCrawl', () => {
  it('matches snapshot', () => {
    expect(fetchFilmCrawl).toMatchSnapshot();
  });

  it('calls doFetch', async () => {
    doFetch.mockImplementation(() => mockFetchedFilmData);
    await fetchFilmCrawl();

    expect(doFetch).toHaveBeenCalledTimes(1);
  });

  it('returns film crawl data ', async () => {
    doFetch.mockImplementation(() => mockFetchedFilmData);

    expect(await fetchFilmCrawl()).toEqual(mockCleanFilmData);
  });
});
