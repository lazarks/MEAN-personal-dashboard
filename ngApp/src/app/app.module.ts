import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './components-layout/sidemenu/sidemenu.component';
import { BodyComponent } from './components-layout/body/body.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverlayComponent } from './components-layout/overlay/overlay.component';
import { NotesComponent } from './components/notes/notes.component';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // layout
    SidemenuComponent,
    BodyComponent,
    OverlayComponent,
    // pages
    DashboardComponent,
    NotesComponent,
    SettingsComponent,
    // utils
    ThemePickerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
