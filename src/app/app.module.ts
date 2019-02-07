import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatInputModule} from '@angular/material'
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { WeatherService} from './services/weather.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
     MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatGridListModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
