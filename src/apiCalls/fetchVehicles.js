import { doFetch } from './doFetch';

export const fetchVehicles = async () => {
  const root = 'https://swapi.co/api';
  const vehiclesData = await doFetch(`${root}/vehicles`);
  return vehiclesData.results.map(vehicle => {
    return {
      name: vehicle.name,
      Model: vehicle.model,
      Class: vehicle.vehicle_class,
      Passengers: vehicle.passengers
    };
  });
};
