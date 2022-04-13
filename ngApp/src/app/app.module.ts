import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';

import { SettingsComponent } from './components/settings/settings.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from './components-layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    // pages
    DashboardComponent,
    NotesComponent,
    SettingsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
