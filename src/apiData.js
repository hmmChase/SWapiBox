const root = 'https://swapi.co/api';

export async function fetchFilmCrawl() {
  const response = await fetch(`${root}/films/`);
  const data = await response.json();
  return await randomCrawl(data);
}

function randomCrawl(data) {
  const crawls = data.results.map(result => {
    return {
      title: result.title,
      date: result.release_date,
      crawl: result.opening_crawl
    };
  });
  const random = Math.floor(Math.random() * crawls.length);
  return crawls[random];
}

export async function fetchCategoryData(category) {

  if (category === "people") {
    const response = await fetch(`${root}/people/`);
    const data = await response.json();
    // console.log(data)
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

  } else if (category === "planets") {
    const response = await fetch(`${root}/planets/`);
    const data = await response.json();
    const planetsData = data.results.map(async result => {
      const residentsData = result.residents.map(async residentURL => {
        const returnedResidents = await fetchResidents(residentURL);
        return returnedResidents;
      });
      const resolveResidents = await Promise.all(residentsData);
      const planetData = {
        name: result.name,
        terrain: result.terrain,
        population: result.population,
        climate: result.climate,
        residents: resolveResidents.length ? resolveResidents.join(', ') : 'unknown'
      };
      return planetData;
    });
    return await Promise.all(planetsData);

  } else if (category === "vehicles") {
    const response = await fetch(`${root}/vehicles/`);
    const data = await response.json();

    return data.results.map(result => {
      return {
        name: result.name,
        model: result.model,
        class: result.vehicle_class,
        passengers: result.passengers
      };
    });
  }
}

async function fetchHomeWorld(homeworldURL) {
  const response = await fetch(homeworldURL);
  const data = await response.json();
  return {
    homeWorld: data.name,
    population: data.population
  };
}

async function fetchSpecies(speciesURL) {
  const response = await fetch(speciesURL);
  const data = await response.json();
  return {
    species: data.name
  };
}

async function fetchResidents(residentsURL) {
  const response = await fetch(residentsURL);
  const data = await response.json();
  const residentName = data.name;
  return residentName;
}