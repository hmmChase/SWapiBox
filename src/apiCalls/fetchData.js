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
    break;
  }
}

export async function makeFetch(URL) {
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}