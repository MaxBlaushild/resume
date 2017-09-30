import { Component, OnInit } from '@angular/core';
import { JobsService } from './../services/jobs/jobs.service';
import { Job } from './../models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs: Job[];

  constructor(private jobsService: JobsService) {
    this.jobs = jobsService.getJobs();
  }

  ngOnInit() {
  }

}
