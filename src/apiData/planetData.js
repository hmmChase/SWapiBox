import { makeFetch } from './apiData';

export async function fetchPlanets(category) {
  const root = 'https://swapi.co/api';
  const planetsData = await makeFetch(`${root}/${category}/`);
  const parsedPlanetsData = planetsData.results.map(async planet => {
    const residentsData = planet.residents.map(async residentUrl => {
      return await fetchResidents(residentUrl);
    });
    const resolveResidents = await Promise.all(residentsData);
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: resolveResidents.length
        ? resolveResidents.join(', ')
        : 'unknown'
    };
  });
  return await Promise.all(parsedPlanetsData);
}

async function fetchResidents(residentsurl) {
  const residentData = await makeFetch(residentsurl);
  return residentData.name;
}