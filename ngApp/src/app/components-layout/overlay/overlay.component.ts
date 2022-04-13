import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  collapsed: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  slide() {
    this.collapsed = !this.collapsed;
  }
}
