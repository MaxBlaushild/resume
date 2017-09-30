import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Card, CardState } from './../card/card';

import { ResumeComponent } from './../resume/resume.component';
import { JobsComponent } from './../jobs/jobs.component';
import { ProjectsComponent } from './../projects/projects.component';
import { PicturesComponent } from './../pictures/pictures.component';
import { SkillsComponent } from './../skills/skills.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
  trigger('cardState', [
    state('top', style({
      transform: 'translateY(-160%)'
    })),
    state('center',   style({
      transform: 'translateY(0%)'
    })),
    state('bottom', style({
      transform: 'translateY(160%)',
    })),
    transition('center => bottom', animate(250)),
    transition('bottom => center', animate(250)),
    transition('top => center', animate(250)),
    transition('bottom => center', animate(250)),
    transition('center => top', animate(250))
  ])
]
})
export class CarouselComponent implements OnInit {
  cardStates: any = CardState;

  cards: Card[] = [
    {
      component: ProjectsComponent,
      state: CardState.top
    },
    {
      component: SkillsComponent,
      state: CardState.center
    },
    {
      component: JobsComponent,
      state: CardState.bottom
    }
  ];

  constructor() { }

  ngOnInit() {}

  getStateName(state: CardState): string {
    return CardState[state];
  }

  shiftRight(): void {
    this.cards.forEach((card) => {
      card.state = card.state + 1;
      if (card.state > 2) {
        card.state = CardState.top;
      }
    });
  }

  shiftLeft(): void {
    this.cards.forEach((card) => {
      card.state = card.state - 1;
      if (card.state < 0) {
        card.state = CardState.bottom;
      }
    });
  }
}
