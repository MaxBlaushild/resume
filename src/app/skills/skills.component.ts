import { Component } from '@angular/core';

import { Skill } from '../models/skill';
import { SkillsService } from '../services/skills/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent  {
  height: number;
  width: number;
  skills: Skill[];

  constructor(private skillsService: SkillsService) {
    this.skills = skillsService.getSkills();
  }
}
