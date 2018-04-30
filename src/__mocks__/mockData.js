export const randomFilmCrawl = {
  crawl: 'Film Crawl',
  title: 'Movie Title',
  date: '1982-09-18'
};

export const cardObj1 = {
  name: 'T-16 skyhopper',
  model: 'T-16 skyhopper',
  class: 'repulsorcraft',
  passengers: '1'
};

export const cardObj2 = {
  name: 'Snowspeeder',
  model: 't-47 airspeeder',
  class: 'airspeeder',
  passengers: '0'
};

export const favorites = [cardObj1, cardObj2];

export const categoryData = [
  {
    name: 'Sand Crawler',
    model: 'Digger Crawler',
    class: 'wheeled',
    passengers: '30'
  },
  {
    name: 'T-16 skyhopper',
    model: 'T-16 skyhopper',
    class: 'repulsorcraft',
    passengers: '1'
  },
  {
    name: 'X-34 landspeeder',
    model: 'X-34 landspeeder',
    class: 'repulsorcraft',
    passengers: '1'
  },
  {
    name: 'TIE/LN starfighter',
    model: 'Twin Ion Engine/Ln Starfighter',
    class: 'starfighter',
    passengers: '0'
  },
  {
    name: 'Snowspeeder',
    model: 't-47 airspeeder',
    class: 'airspeeder',
    passengers: '0'
  },
  {
    name: 'TIE bomber',
    model: 'TIE/sa bomber',
    class: 'space/planetary bomber',
    passengers: '0'
  },
  {
    name: 'AT-AT',
    model: 'All Terrain Armored Transport',
    class: 'assault walker',
    passengers: '40'
  },
  {
    name: 'AT-ST',
    model: 'All Terrain Scout Transport',
    class: 'walker',
    passengers: '0'
  },
  {
    name: 'Storm IV Twin-Pod cloud car',
    model: 'Storm IV Twin-Pod',
    class: 'repulsorcraft',
    passengers: '0'
  },
  {
    name: 'Sail barge',
    model: 'Modified Luxury Sail Barge',
    class: 'sail barge',
    passengers: '500'
  }
];

export const fetchedPeopleData = {
  results: [
    {
      birth_year: '112BBY',
      created: '2014-12-10T15:10:51.357000Z',
      edited: '2014-12-20T21:17:50.309000Z',
      eye_color: 'yellow',
      films: (6)[
        ('https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/')
      ],
      gender: 'n/a',
      hair_color: 'n/a',
      height: '167',
      homeworld: 'https://swapi.co/api/planets/1/',
      mass: '75',
      name: 'C-3PO',
      skin_color: 'gold',
      species: ['https://swapi.co/api/species/2/'],
      starships: [],
      url: 'https://swapi.co/api/people/2/',
      vehicles: []
    }
  ]
};

export const fetchedHomeWorldData = {
  climate: 'temperate',
  created: '2014-12-10T16:16:26.566000Z',
  diameter: '0',
  edited: '2014-12-20T20:58:18.452000Z',
  films: [],
  gravity: '1 standard',
  name: 'Tatooine',
  orbital_period: 'unknown',
  population: '200000',
  residents: ['https://swapi.co/api/people/10/'],
  rotation_period: 'unknown',
  surface_water: 'unknown',
  terrain: 'grass',
  url: 'https://swapi.co/api/planets/20/'
};

export const fetchedSpeciesData = {
  average_height: '180',
  average_lifespan: '120',
  classification: 'mammal',
  created: '2014-12-10T13:52:11.567000Z',
  designation: 'sentient',
  edited: '2015-04-17T06:59:55.850671Z',
  eye_colors: 'brown, blue, green, hazel, grey, amber',
  films: (7)[
    ('https://swapi.co/api/films/2/',
    'https://swapi.co/api/films/7/',
    'https://swapi.co/api/films/5/',
    'https://swapi.co/api/films/4/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
    'https://swapi.co/api/films/1/')
  ],
  hair_colors: 'blonde, brown, black, red',
  homeworld: 'https://swapi.co/api/planets/9/',
  language: 'Galactic Basic',
  name: 'Human',
  people: (35)[
    ('https://swapi.co/api/people/1/',
    'https://swapi.co/api/people/4/',
    'https://swapi.co/api/people/5/',
    'https://swapi.co/api/people/6/',
    'https://swapi.co/api/people/7/',
    'https://swapi.co/api/people/9/',
    'https://swapi.co/api/people/10/',
    'https://swapi.co/api/people/11/',
    'https://swapi.co/api/people/12/',
    'https://swapi.co/api/people/14/',
    'https://swapi.co/api/people/18/',
    'https://swapi.co/api/people/19/',
    'https://swapi.co/api/people/21/',
    'https://swapi.co/api/people/22/',
    'https://swapi.co/api/people/25/',
    'https://swapi.co/api/people/26/',
    'https://swapi.co/api/people/28/',
    'https://swapi.co/api/people/29/',
    'https://swapi.co/api/people/32/',
    'https://swapi.co/api/people/34/',
    'https://swapi.co/api/people/43/',
    'https://swapi.co/api/people/51/',
    'https://swapi.co/api/people/60/',
    'https://swapi.co/api/people/61/',
    'https://swapi.co/api/people/62/',
    'https://swapi.co/api/people/66/',
    'https://swapi.co/api/people/67/',
    'https://swapi.co/api/people/68/',
    'https://swapi.co/api/people/69/',
    'https://swapi.co/api/people/74/',
    'https://swapi.co/api/people/81/',
    'https://swapi.co/api/people/84/',
    'https://swapi.co/api/people/85/',
    'https://swapi.co/api/people/86/',
    'https://swapi.co/api/people/35/')
  ],
  skin_colors: 'caucasian, black, asian, hispanic',
  url: 'https://swapi.co/api/species/1/'
};
