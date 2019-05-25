import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScoreTableComponent } from './score-table/score-table.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatChipsModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { ScoreTrackerContainerComponent } from './score-tracker-container/score-tracker-container.component';
import { NewRoundDialogComponent } from './new-round-dialog/new-round-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTeamDialogComponent } from './new-team-dialog/new-team-dialog.component';
import { PointSelectorComponent } from './point-selector/point-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreTableComponent,
    ScoreTrackerContainerComponent,
    NewRoundDialogComponent,
    NewTeamDialogComponent,
    PointSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewRoundDialogComponent,
    NewTeamDialogComponent
  ]
})
export class AppModule { }
