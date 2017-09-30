import { Injectable } from '@angular/core';

import { Skill } from '../../models/skill';
import { skills } from './skills';

@Injectable()
export class SkillsService {

  awesomeGrades: string[] = ['S++', 'S+', 'S'];
  greatGrades: string[] = ['A++', 'A+', 'A'];
  goodGrades: string[] = ['B++', 'B', 'B+'];

  constructor() { }

  getSkills(): Skill[] {
    return skills;
  }

  evaulateGrade(grade: string): string {
    var evaulation = 'fine';

    if (this.awesomeGrades.includes(grade)) {
      evaulation = 'awesome';
    } else if (this.greatGrades.includes(grade)) {
      evaulation = 'great'
    } else if (this.goodGrades.includes(grade)) {
      evaulation = 'good';
    }

    return evaulation;

  }

}
