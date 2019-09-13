import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsListComponent } from './jobs-list.component';
import { JobModel } from '../../models/JobModel';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobsFetchService } from '../../services/jobs-fetch-service.service';

describe('JobsListComponent', () => {
  let component: JobsListComponent;
  let fixture: ComponentFixture<JobsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JobsListComponent],
      imports:[MatCardModule, MatButtonModule, FormsModule, MatButtonToggleModule, BrowserModule, BrowserAnimationsModule],
      providers:[JobsFetchService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort jobs list by location', () => {
    let jobs = [];
    component.locationToggle = true;
    let newJob = new JobModel();
    newJob.location = 'S';
    jobs.push(newJob);
    newJob = new JobModel();
    newJob.location = 'I';
    jobs.push(newJob);
    newJob = new JobModel();
    newJob.location = 'D';
    jobs.push(newJob);
    component.displayList = jobs;
    component.sortList();
    expect((component.displayList[0].location == 'D')
      && (component.displayList[1].location == 'I')
      && (component.displayList[2].location == 'S'))
      .toBeTruthy();
  });

  it('should sort jobs list by experience', () => {
    let jobs = [];
    component.experienceToggle = true;
    let newJob = new JobModel();
    newJob.experience = '0-2 years';
    jobs.push(newJob);
    newJob = new JobModel();
    newJob.experience = '4-6 years';
    jobs.push(newJob);
    newJob = new JobModel();
    newJob.experience = 'Fresher';
    jobs.push(newJob);
    component.displayList = jobs;
    component.sortList();
    expect((component.displayList[0].experience == 'Fresher')
      && (component.displayList[1].experience == '0-2 years')
      && (component.displayList[2].experience == '4-6 years'))
      .toBeTruthy();
  });

  it('should filter jobs list by filter text', () => {
    let jobs = [];
    component.filterText='inte';
    let newJob = new JobModel();
    newJob.companyname = 'Intel';
    jobs.push(newJob);
    newJob = new JobModel();
    newJob.skills = 'Intelligence';
    jobs.push(newJob);
    newJob = new JobModel();
    newJob.title = 'Software Development Intern';
    jobs.push(newJob);
    component.jobsList = jobs;
    component.filter();
    expect((component.displayList.findIndex((x:JobModel)=>x.companyname=='Intel')!=-1)
      && (component.displayList.findIndex((x:JobModel)=>x.skills=='Intelligence')!=-1)
      && (component.displayList.findIndex((x:JobModel)=>x.title=='Software Development Intern')!=-1))
      .toBeTruthy();
  });

  


});
