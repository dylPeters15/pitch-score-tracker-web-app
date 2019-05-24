import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScoreTableComponent } from './score-table/score-table.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { ScoreTrackerContainerComponent } from './score-tracker-container/score-tracker-container.component';
import { NewRoundDialogComponent } from './new-round-dialog/new-round-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreTableComponent,
    ScoreTrackerContainerComponent,
    NewRoundDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewRoundDialogComponent
  ]
})
export class AppModule { }
