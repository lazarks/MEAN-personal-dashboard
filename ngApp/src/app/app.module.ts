import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './components-layout/sidemenu/sidemenu.component';
import { BodyComponent } from './components-layout/body/body.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverlayComponent } from './components-layout/overlay/overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    BodyComponent,
    OverlayComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
