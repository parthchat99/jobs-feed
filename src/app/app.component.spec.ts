import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchHomeComponent } from './components/search-home/search-home.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { JobsFetchService } from './services/jobs-fetch-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchHomeComponent,
        JobsListComponent
      ],
      imports: [MatSelectModule, MatCardModule, MatButtonModule, FormsModule, MatButtonToggleModule,BrowserModule, BrowserAnimationsModule, HttpClientModule],
      providers: [JobsFetchService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
