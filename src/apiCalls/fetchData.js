import { fetchPeople } from './peopleData';
import { fetchPlanets } from './planetData';
import { fetchVehicles } from './vehicleData';

export async function fetchCategoryData(category) {
  switch (category) {
  case 'people':
    return fetchPeople(category);
  case 'planets':
    return fetchPlanets(category);
  case 'vehicles':
    return fetchVehicles(category);
  default:
    return 'invalid category';
  }
}

export async function makeFetch(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Network request failed. (error: ${error.message})`);
  }
}
