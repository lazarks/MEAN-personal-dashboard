import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { OverlayComponent } from './overlay/overlay.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AppRoutingModule } from '../app-routing.module';
import { OverlayModule } from './overlay/overlay.module';

@NgModule({
  declarations: [BodyComponent, SidemenuComponent],
  imports: [CommonModule, AppRoutingModule, OverlayModule],
  exports: [BodyComponent, OverlayComponent, SidemenuComponent, OverlayModule],
})
export class LayoutModule {}
