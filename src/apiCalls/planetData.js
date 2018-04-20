import { makeFetch } from './fetchData';

export async function fetchPlanets(category) {
  const root = 'https://swapi.co/api';
  const planetsData = await makeFetch(`${root}/${category}/`);
  const parsedPlanetsData = planetsData.results.map(async planet => {
    const residentsData = planet.residents.map(async residentURL => {
      return await fetchResidents(residentURL);
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

async function fetchResidents(residentURL) {
  const residentData = await makeFetch(residentURL);
  return residentData.name;
}