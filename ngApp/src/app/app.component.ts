import { Component, ViewChild } from '@angular/core';
import { OverlayComponent } from './components-layout/overlay/overlay.component';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(OverlayComponent) overlay!: OverlayComponent;
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(event: SideNavToggle): void {
    this.screenWidth = event.screenWidth;
    this.isSideNavCollapsed = event.collapsed;
  }

  onLayoutOpen() {
    this.overlay.slide();
  }
}
