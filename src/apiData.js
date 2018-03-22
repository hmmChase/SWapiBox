const root = 'https://swapi.co/api';

function randomCrawl(data) {
  const crawls = data.results.map(result => {
    // console.log(result);
    return {
      title: result.title,
      date: result.release_date,
      crawl: result.opening_crawl
    };
  });

  const random = Math.floor(Math.random() * crawls.length);

  return crawls[random];
}

export async function fetchFilmCrawl() {
  const root = 'https://swapi.co/api';

  const response = await fetch(`${root}/films/`);
  const data = await response.json();
  return await randomCrawl(data);
}

export async function fetchData(category) {

  if (category === "people") {
    const response = await fetch(`${root}/people/`);
    const data = await response.json();

    return data.results.map(result => {
      // console.log(result);
      return {
        name: result.name
        // homeworld: 'homeworld',
        // species: 'species',
        // population: 'population'
      };
    });

  } else if (category === "planets") {
    const response = await fetch(`${root}/planets/`);
    const data = await response.json();

    return data.results.map(result => {
      // console.log(result);
      return {
        name: result.name
        // Model
        // Class
        // Number of Passengers
      };
    });

  } else if (category === "vehicles") {
    const response = await fetch(`${root}/vehicles/`);
    const data = await response.json();

    return data.results.map(result => {
      // console.log(result);
      return {
        name: result.name
        // Model
        // Class
        // Number of Passengers
      };
    });
  }
}
