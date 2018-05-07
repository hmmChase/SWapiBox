import { doFetch } from './doFetch';

export const fetchFilmCrawl = async () => {
  const root = 'https://swapi.co/api';
  const randomNum = Math.floor(Math.random() * 6 + 1);
  const randomFilmData = await doFetch(`${root}/films/${randomNum}`);
  return {
    title: randomFilmData.title,
    date: randomFilmData.release_date,
    crawl: randomFilmData.opening_crawl
  };
};