import { Injectable } from '@angular/core';
import { Project } from './../../models/project';
import { projects } from './projects';

@Injectable()
export class ProjectsService {

  constructor() { }

  getProjects(): Project[] {
    return projects;
  }

}
