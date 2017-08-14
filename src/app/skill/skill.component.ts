import { Component, OnInit, Input } from '@angular/core';
import { Skill } from './../models/skill';

import { SkillsService } from '../services/skills/skills.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skill: Skill;

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
  }

  evaluateGrade(): string {
    return this.skillsService.evaulateGrade(this.skill.grade);
  }

}
