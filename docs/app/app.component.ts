import { Component } from '@angular/core';
import { Card } from './card/card';
import { ResumeComponent } from './resume/resume.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  canvasCard: Card = {
    component: ResumeComponent,
    state: null
  }
}
