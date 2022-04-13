import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { OverlayComponent } from './overlay/overlay.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [BodyComponent, OverlayComponent, SidemenuComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [BodyComponent, OverlayComponent, SidemenuComponent],
})
export class LayoutModule {}