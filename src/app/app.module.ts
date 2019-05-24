import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScoreTableComponent } from './score-table/score-table.component';
import { MatTableModule, MatIconModule, MatButtonModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { ScoreTrackerContainerComponent } from './score-tracker-container/score-tracker-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreTableComponent,
    ScoreTrackerContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
