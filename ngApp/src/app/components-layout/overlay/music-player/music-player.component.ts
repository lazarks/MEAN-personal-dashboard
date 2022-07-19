import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
})
export class MusicPlayerComponent implements OnInit {
  isPlaying: boolean = false;
  audio: any; // audio file
  audioContext!: AudioContext;
  src: any; // media element source from audio context
  @ViewChild('canvas', { static: false }) myCanvas!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.audio = new Audio();
    this.audio.src = '../../../assets/audio/cxlt.mp3';
  }

  toggleAudio(event: Event) {
    event.stopPropagation(); // prevent overlay closing on click
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      // here because web autoplay policy -.-
      if (!this.audioContext) {
        this.audioContext = new AudioContext();
        this.src = this.audioContext.createMediaElementSource(this.audio);
      }
      this.loadVisualiser();
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  loadVisualiser() {
    let analyser = this.audioContext.createAnalyser();
    let ctx = this.myCanvas.nativeElement.getContext('2d');

    this.src.connect(analyser);
    analyser.connect(this.audioContext.destination);
    analyser.fftSize = 256;

    let bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    let dataArray = new Uint8Array(bufferLength);
    let WIDTH = this.myCanvas.nativeElement.width;
    let HEIGHT = this.myCanvas.nativeElement.height;

    let barWidth = (WIDTH / bufferLength) * 2.2;
    let barHeight;
    let x = 0;

    renderFrame();

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      x = 0;
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        var r = 0;
        var g = barHeight + 150 * (i / bufferLength);
        var b = 255;

        ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }
  }
}
