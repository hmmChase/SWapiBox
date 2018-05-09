import { doFetch } from './doFetch';

export const fetchPeople = async () => {
  try {
    const root = 'https://swapi.co/api';
    const peopleData = await doFetch(`${root}/people`);
    const parsedPeopleData = peopleData.results.map(async person => {
      console.log(person);

      const homeWorldData = await fetchHomeWorld(person.homeworld);
      const speciesData = await fetchSpecies(person.species);
      return {
        name: person.name,
        ...homeWorldData,
        ...speciesData
      };
    });
    return await Promise.all(parsedPeopleData);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchHomeWorld = async homeworldURL => {
  try {
    const homeWorldData = await doFetch(homeworldURL);
    return {
      homeWorld: homeWorldData.name,
      population: homeWorldData.population
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchSpecies = async speciesURL => {
  try {
    const speciesData = await doFetch(speciesURL);
    return {
      species: speciesData.name
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
