import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHomeComponent } from './search-home.component';
import { JobModel } from '../../models/JobModel';
import { JobsListComponent } from '../jobs-list/jobs-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobsFetchService } from '../../services/jobs-fetch-service.service';

describe('SearchHomeComponent', () => {
  let component: SearchHomeComponent;
  let fixture: ComponentFixture<SearchHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHomeComponent,JobsListComponent ],
      imports:[MatSelectModule,MatCardModule, MatButtonModule, FormsModule, MatButtonToggleModule, BrowserModule, BrowserAnimationsModule],
      providers:[JobsFetchService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
