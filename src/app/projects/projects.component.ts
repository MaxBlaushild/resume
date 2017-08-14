import { Component } from '@angular/core';

import { Project } from '../models/project';
import { EmailService } from '../services/email/email.service';
import { ProjectsService } from '../services/projects/projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent  {

  emailPattern: any;
  email: string;
  height: number;
  width: number;
  projects: Project[];

  constructor(
    private emailService: EmailService,
    private projectsService: ProjectsService
  ) {
    this.projects = projectsService.getProjects();
  }

  requestAccess() {
    this.emailService.send(this.email);
  }
}
