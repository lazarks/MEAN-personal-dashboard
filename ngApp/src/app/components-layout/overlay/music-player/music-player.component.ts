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
export class MusicPlayerComponent implements OnInit, AfterViewInit {
  isPlaying: boolean = false;
  audio: any;
  context!: AudioContext;
  @ViewChild('canvas', { static: false }) myCanvas!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.audio = new Audio();
    this.audio.src = '../../../assets/tempAudio.mp3';
    this.context = new AudioContext();
  }

  ngAfterViewInit(): void {
    this.loadCanvas();
  }

  loadCanvas() {
    let src = this.context.createMediaElementSource(this.audio);
    let analyser = this.context.createAnalyser();
    let ctx = this.myCanvas.nativeElement.getContext('2d');

    src.connect(analyser);
    analyser.connect(this.context.destination);
    analyser.fftSize = 256;

    let bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    let dataArray = new Uint8Array(bufferLength);
    let WIDTH = this.myCanvas.nativeElement.width;
    let HEIGHT = this.myCanvas.nativeElement.height;

    let barWidth = (WIDTH / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    renderFrame();

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      x = 0;
      analyser.getByteFrequencyData(dataArray);
      ctx!.fillStyle = '#000';
      ctx!.fillRect(0, 0, WIDTH, HEIGHT);

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        let r = barHeight + 25 * (i / bufferLength);
        var g = 250 * (i / bufferLength);
        var b = 50;

        ctx!.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        ctx!.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }
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
