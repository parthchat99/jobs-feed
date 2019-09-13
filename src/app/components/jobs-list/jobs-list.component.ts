import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../models/Job';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  @Input() jobsList: Array<Job>;
  filterText: string = '';
  displayList: Array<Job> = [];
  locationToggle: boolean = false;
  experienceToggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // called on sort toggle change
  onToggleChange(type) {
    if (type == 1) {
      this.locationToggle = !this.locationToggle;
      if (this.locationToggle) {
        this.experienceToggle = false;
      }
    }
    else {
      this.experienceToggle = !this.experienceToggle;
      if (this.experienceToggle) {
        this.locationToggle = false;
      }
    }
    this.sortList();
  }

  // sorts list of displayed jobs
  sortList() {
    // if both toggles are false then leave list as it is
    if (!this.locationToggle && !this.experienceToggle) {
      return;
    }
    this.displayList = this.displayList.sort((job1: Job, job2: Job) => {
      if (this.locationToggle) {
        if (!job1.location) {
          return 1;
        }
        else if (!job2.location) {
          return -1;
        }
        return (job1.location.trim().toLowerCase().localeCompare(job2.location.trim().toLowerCase()));
      }
      else {
        if (!job1.experience || job2.experience == 'Fresher') {
          return 1;
        }
        else if (!job2.experience || job1.experience == 'Fresher') {
          return -1;
        }
        return (parseInt(job1.experience) - parseInt(job2.experience));
      }
    })
  }

  // filters list of jobs based on title, skills or company name
  filter() {
    this.filterText = this.filterText.trim().toLowerCase();
    if (!this.filterText || this.filterText == '') {
      this.displayList = this.jobsList;
    }
    else {
      this.displayList = this.jobsList.filter((x: Job) => {
        if ((x.skills && x.skills.trim().toLowerCase().includes(this.filterText))
        || (x.companyname && x.companyname.trim().toLowerCase().startsWith(this.filterText))
        || (x.title && x.title.trim().toLowerCase().includes(this.filterText))) {
          return true;
        }
        return false;
      });
    }
    this.sortList();
  }

  //opens apply link in new tab
  onApplyClick(link: string) {
    window.open(link, '_blank');
  }

  //called when top level search params are changed
  ngOnChanges() {
    // take jobs list to initial state
    this.filterText = '';
    this.experienceToggle = false;
    this.locationToggle = false;
    this.displayList = this.jobsList;
    if (!this.displayList) {
      this.displayList = [];
    }
  }

}
