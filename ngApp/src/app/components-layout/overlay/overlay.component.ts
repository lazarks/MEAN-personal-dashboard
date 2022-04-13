import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  collapsed: boolean = true;
  isPlaying: boolean = false;

  audio: any;

  constructor(private el: ElementRef) {
    this.audio = new Audio();
    this.audio.src = '../../../assets/tempAudio.mp3';
  }

  ngOnInit(): void {}

  slide() {
    this.collapsed = !this.collapsed;
  }

  playAudio(event: Event) {
    event.stopPropagation();
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }
}
