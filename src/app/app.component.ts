import { Component, OnInit } from '@angular/core';
import { JobsFetchService } from './services/jobs-fetch-service.service';
import { Job } from './models/Job';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // url: string = 'https://api.myjson.com/bins/kez8a';
  url: string = 'https://cors-anywhere.herokuapp.com/'+'https://jobsqared.herokuapp.com/jobs';
  jobs: Array<Job> = [];
  isSearchDisabled: boolean = true;

  constructor(
    private jobsFetchService: JobsFetchService
  ) { }

  ngOnInit() {
    this.jobsFetchService.fetchJobs(this.url).subscribe((data: Array<Job>) => {

      if (data['len'] > 0) {
        this.jobs = data;
        this.isSearchDisabled = false;
      } else {
        alert("Invalid Data.");
        this.isSearchDisabled = true;
      }
    }, error => {
      this.isSearchDisabled = true;
    });
  }
}
