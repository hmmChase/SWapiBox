import { fetchFilmCrawl } from '../apiCalls/filmCrawl';

import { makeFetch } from './fetchData';
jest.mock('./fetchData.js');

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
  it('calls makeFetch', async () => {
    makeFetch.mockImplementation(() => mockFetchedFilmData);
    await fetchFilmCrawl();

    expect(makeFetch).toHaveBeenCalledTimes(1);
  });

  it('returns film crawl data ', async () => {
    makeFetch.mockImplementation(() => mockFetchedFilmData);

    expect(await fetchFilmCrawl()).toEqual(mockCleanFilmData);
  });
});
