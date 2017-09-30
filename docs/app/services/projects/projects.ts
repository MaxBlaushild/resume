import { Project } from './../../models/project';

export const projects: Project[] = [
    {
      name: 'Yacht Bot',
      stack: 'NodeJS, PostgreSQL, DigitalOcean',
      description: 'The Yacht Bot is a crypto-currency trading bot. The bot listens in on a feed of all of the major exchanges tickers, provided by the Coinigy API, and interacts with the exchanges using their own proprietary APIs.'
    },
    {
      name: 'Lightupon',
      stack: 'Swift, Go, PostgreSQL, AWS',
      description: 'Lightupon is an ARG story-telling app. Users can can discover interesting content in their immediate vicinity, go on guided trips across town, or create their own trips and content.'
    },
    {
      name: 'Glitchly',
      stack: 'AngularJS, Ruby, PostgreSQL, AWS',
      description: 'Glitchly is a glitch art social network. users can use a series of filters to pixel sort their pictures. Other users see a feed of all of their friend\'s art, comment, and like them.'
    }
  ];
