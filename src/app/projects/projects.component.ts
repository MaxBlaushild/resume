import { Component, OnInit } from '@angular/core';

import { Project } from '../project/project';

const pattern = /^[a-z0-9A-Z!#\$%&'\*\+/=\?\^_`\{\|\}~,\-]+(\.[_a-z0-9A-Z!#\$%&'\*\+/=\?\^_`\{\|\}~,\-]+)*@([a-z0-9A-Z]+[-]?[a-z0-9A-Z]+)+(\.[a-z0-9A-Z]{1,}){1,}$/;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  emailPattern: any;
  email: string;

  projects: Project[] = [
    {
      name: 'Yacht Bot',
      stack: 'NodeJS, PostgreSQL, DigitalOcean',
      description: 'The Yacht Bot is a crypto-currency trading bot. The bot listens in on a feed of all of the major exchanges tickers, provided by the Coinigy API, and interacts with the exchanges using their own proprietary APIs.',
      heroImage: 'assets/images/yacht-bot.jpeg'
    },
    {
      name: 'Lightupon',
      stack: 'Swift, Go, PostgreSQL, ImageMagick, AWS',
      description: 'Lightupon is an ARG story-telling app. Users can can discover interesting content in their immediate vicinity, go on guided trips across town, or create their own trips and content.',
      heroImage: 'assets/images/yacht-bot.jpeg'
    },
    {
      name: 'Glitchly',
      stack: 'AngularJS, Ruby, PostgreSQL, ImageMagick, AWS',
      description: 'Glitchly is a glitch art social network. users can use a series of filters to pixel sort their pictures. Other users see a feed of all of their friend\'s art, comment, and like them.',
      heroImage: 'assets/images/yacht-bot.jpeg'
    }
  ];

  constructor() {
    this.emailPattern = pattern;
  }

  ngOnInit() {
  }

  requestAccess() {
    alert('farts');
  }

  log() {
    console.log(this);
  }

}
