import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Card, CardState } from './../card/card';

import { ResumeComponent } from './../resume/resume.component';
import { AboutComponent } from './../about/about.component';
import { ProjectsComponent } from './../projects/projects.component';
import { ContactComponent } from './../contact/contact.component';
import { SkillsComponent } from './../skills/skills.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
  trigger('cardState', [
    state('left', style({
      transform: 'translateX(-160%)'
    })),
    state('center',   style({
      transform: 'translateX(0%)'
    })),
    state('right', style({
      transform: 'translateX(160%)',
    })),
    state('outLeft',   style({
      transform: 'translateX(-320%)'
    })),
    state('outRight',   style({
      transform: 'translateX(320%)'
    })),
    transition('center => right', animate(250)),
    transition('right => center', animate(250)),
    transition('left => center', animate(250)),
    transition('outLeft => left', animate(250)),
    transition('right => center', animate(250)),
    transition('center => left', animate(250)),
    transition('left => outLeft', animate(250)),
    transition('outRight => right', animate(250)),
    transition('right => outRight', animate(250)),
  ])
]
})
export class CarouselComponent implements OnInit {
  cardStates: any = CardState;

  cards: Card[] = [
    {
      component: ResumeComponent,
      state: CardState.outLeft
    },
    {
      component: ProjectsComponent,
      state: CardState.left
    },
    {
      component: AboutComponent,
      state: CardState.center
    },
    {
      component: ContactComponent,
      state: CardState.right
    },
    {
      component: SkillsComponent,
      state: CardState.outRight
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
      if (card.state > 4) {
        card.state = CardState.outLeft;
      }
    });
  }

  shiftLeft(): void {
    this.cards.forEach((card) => {
      card.state = card.state - 1;
      if (card.state < 0) {
        card.state = CardState.outRight;
      }
    });
  }
}
