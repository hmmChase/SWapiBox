import { doFetch } from './doFetch';

export const fetchVehicles = async () => {
  const root = 'https://swapi.co/api';
  const vehiclesData = await doFetch(`${root}/vehicles`);
  return vehiclesData.results.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers
    };
  });
}
