import { Injectable } from '@angular/core';
import { jobs } from './jobs';
import { Job } from './../../models/job';

@Injectable()
export class JobsService {

  constructor() { }

  getJobs(): Job[] {
    return jobs;
  }

}
