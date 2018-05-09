import { doFetch } from './doFetch';

export const fetchPeople = async () => {
  const root = 'http://swapi.com/api';
  const peopleData = await doFetch(`${root}/people`);
  return peopleData;
};
