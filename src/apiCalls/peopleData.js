import { makeFetch } from './fetchData';

export async function fetchPeople(category) {
  const root = 'https://swapi.co/api';
  const peopleData = await makeFetch(`${root}/${category}/`);
  const parsedPeapleData = peopleData.results.map(async person => {
    const homeWorldData = await fetchHomeWorld(person.homeworld);
    const speciesData = await fetchSpecies(person.species);
    return {
      name: person.name,
      ...homeWorldData,
      ...speciesData
    };
  });
  return await Promise.all(parsedPeapleData);
}

async function fetchHomeWorld(homeworldURL) {
  const homeWorldData = await makeFetch(homeworldURL);
  return {
    homeWorld: homeWorldData.name,
    population: homeWorldData.population
  };
}

async function fetchSpecies(speciesURL) {
  const speciesData = await makeFetch(speciesURL);
  return {
    species: speciesData.name
  };
}