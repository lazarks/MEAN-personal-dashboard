import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
})
export class MusicPlayerComponent implements OnInit {
  isPlaying: boolean = false;
  audio: any;

  constructor() {}

  ngOnInit(): void {
    this.audio = new Audio();
    this.audio.src = '../../../assets/tempAudio.mp3';
  }

  toggleAudio(event: Event) {
    event.stopPropagation();
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }
}
