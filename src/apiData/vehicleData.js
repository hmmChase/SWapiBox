import { makeFetch } from './apiData';

export async function fetchVehicles(category) {
  const root = 'https://swapi.co/api';
  const vehiclesData = await makeFetch(`${root}/${category}/`);
  return vehiclesData.results.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers
    };
  });
}
