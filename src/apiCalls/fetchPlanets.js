import { doFetch } from './doFetch';

export const fetchPlanets = async () => {
  try {
    const root = 'https://swapi.co/api';
    const planetsData = await doFetch(`${root}/planets`);
    // console.log(JSON.stringify(await doFetch(`${root}/planets`)))
    const parsedPlanetsData = planetsData.results.map(async planet => {
      const residentsData = planet.residents.map(async residentURL => {
        return await fetchResidents(residentURL);
      });
      const resolveResidents = await Promise.all(residentsData);
      return {
        name: planet.name,
        Terrain: planet.terrain,
        Population: planet.population,
        Climate: planet.climate,
        Residents: resolveResidents.length
          ? resolveResidents.join(', ')
          : 'unknown'
      };
    });
    return await Promise.all(parsedPlanetsData);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchResidents = async residentURL => {
  try {
    const residentData = await doFetch(residentURL);
    return residentData.name;
  } catch (error) {
    throw new Error(error.message);
  }
};
