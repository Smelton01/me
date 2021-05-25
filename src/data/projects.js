// TODO Add a couple lines about each project
const data = [
  {
    title: 'OCR Sudoku',
    subtitle: 'React + Flask personal project',
    image: '/images/projects/nearestdollar.jpg',
    date: '2020-12-20',
    desc:
      'Sudoku app uses OpenCV based OCR network to read Sudoku grid from uploaded image. '
      + 'Allows users to play uploaded grid and visualize the solution obtained, '
      + 'through the backtracking algorithm. ',
  },
  {
    title: 'FUK NOW Classifieds',
    subtitle: 'AI, React, algirithm solving project',
    link: 'https://devpost.com/software/harvest',
    image: '/images/projects/harvest.jpg',
    date: '2021-01-20',
    desc:
      'App allows users to input their name and email address to subscribe '
      + 'or updates when new posts are made to the Fukuoka-now Classified section, '
      + 'a platform for foreign residents of the city to buy and sell used goods. '
      + 'Web scraping, email server, database management, web app.',
  },
  {
    title: 'Barney bot',
    subtitle: 'A twitter bot',
    link: 'http://www.spacepotato.org',
    image: '/images/projects/spacepotato.jpg',
    date: '2020-04-13',
    desc:
      'A twitter bot designed to respond to posts about the How I Met Your Mother '
      + 'TV show. The bot responses are based on an Recurrent Neural Network based '
      + 'on the script from the entire 9 seasons of the show, scraped from IMDB.',
  },
  {
    title: 'URLs',
    subtitle: 'A URL shortener microservice',
    image: '/images/projects/catdetector.jpg',
    date: '2021-05-01',
    desc:
      'A URL shortener microservice designed using express.js. '
      + 'Post requests made to the API are responded to with the '
      + 'shortened url. A valid url with the aapi as base will be '
      + 'redirected to the original url saved in the database',
  },
];

export default data;
