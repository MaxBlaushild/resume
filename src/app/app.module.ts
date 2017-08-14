import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';

import { EmailService } from './services/email/email.service';
import { SkillsService } from './services/skills/skills.service';
import { DropService } from './services/drop/drop.service';
import { ProjectsService } from './services/projects/projects.service';
import { JobsService } from './services/jobs/jobs.service';
import { SackService } from './services/sack/sack.service';

import { SkillComponent } from './skill/skill.component';
import { CanvasComponent } from './canvas/canvas.component';
import { DragulaModule } from 'ng2-dragula';

import { DraggableDirective } from './../directives/draggable.directive';
import { DroppableDirective } from './../directives/droppable.directive';
import { RandomizedLocationDirective } from './../directives/randomized-location.directive';
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { PicturesComponent } from './pictures/pictures.component';
import { TutorialModalComponent } from './tutorial-modal/tutorial-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CarouselComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
    SkillsComponent,
    ProjectComponent,
    SkillComponent,
    DraggableDirective,
    DroppableDirective,
    RandomizedLocationDirective,
    CanvasComponent,
    JobsComponent,
    JobComponent,
    PicturesComponent,
    TutorialModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DragulaModule
  ],
  providers: [
    EmailService,
    SkillsService,
    DropService,
    ProjectsService,
    JobsService,
    SackService
  ],
  entryComponents: [
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
    SkillsComponent,
    CanvasComponent,
    PicturesComponent,
    JobsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
