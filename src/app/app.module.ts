import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';


import { AppComponent } from './app.component';
import { JobsFetchService } from './jobs-fetch-service.service';
import { SearchHomeComponent } from './search-home/search-home.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SearchHomeComponent,
    JobsListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
