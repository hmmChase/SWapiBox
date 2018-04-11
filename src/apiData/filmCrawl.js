import { makeFetch } from './apiData';

export async function fetchFilmCrawl() {
  const root = 'https://swapi.co/api';
  const random = Math.floor((Math.random() * 6) + 1);
  const film = await makeFetch(`${root}/films/${random}`);
  return {
    title: film.title,
    date: film.release_date,
    crawl: film.opening_crawl
  };
}