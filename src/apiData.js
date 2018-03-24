const root = 'https://swapi.co/api';

export async function fetchFilmCrawl() {
  const random = Math.floor((Math.random() * 6) + 1);
  const data = await makeFetch(`${root}/films/${random}`);
  return {
    title: data.title,
    date: data.release_date,
    crawl: data.opening_crawl
  };
}

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

async function makeFetch(url) {
  const response = await fetch(url);
  return await response.json();
}

async function fetchPeople(category) {
  const data = await makeFetch(`${root}/${category}/`);
  const peopleData = data.results.map(async result => {
    const homeWorldData = await fetchHomeWorld(result.homeworld);
    const speciesData = await fetchSpecies(result.species);
    return {
      name: result.name,
      ...homeWorldData,
      ...speciesData
    };
  });
  return await Promise.all(peopleData);
}

async function fetchPlanets(category) {
  const data = await makeFetch(`${root}/${category}/`);
  const planetsData = data.results.map(async result => {
    const residentsData = result.residents.map(async residenturl => {
      const returnedResidents = await fetchResidents(residenturl);
      return returnedResidents;
    });
    const resolveResidents = await Promise.all(residentsData);
    const planetData = {
      name: result.name,
      terrain: result.terrain,
      population: result.population,
      climate: result.climate,
      residents: resolveResidents.length
        ? resolveResidents.join(', ')
        : 'unknown'
    };
    return planetData;
  });
  return await Promise.all(planetsData);
}

async function fetchVehicles(category) {
  const data = await makeFetch(`${root}/${category}/`);
  return data.results.map(result => {
    return {
      name: result.name,
      model: result.model,
      class: result.vehicle_class,
      passengers: result.passengers
    };
  });
}

async function fetchHomeWorld(homeworldurl) {
  const data = await makeFetch(homeworldurl);
  return {
    homeWorld: data.name,
    population: data.population
  };
}

async function fetchSpecies(speciesurl) {
  const data = await makeFetch(speciesurl);
  return {
    species: data.name
  };
}

async function fetchResidents(residentsurl) {
  const data = await makeFetch(residentsurl);
  const residentName = data.name;
  return residentName;
}