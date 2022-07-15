import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { buffer } from 'rxjs';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss'],
})
export class VisualizerComponent implements OnInit, AfterViewInit {
  audio = new Audio();
  @ViewChild('canvas', { static: false })
  myCanvas!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.audio.src = '../../../assets/tempAudio.mp3';
    this.audio.load();
    this.audio.play();
  }

  ngAfterViewInit(): void {
    let context = new AudioContext();
    let src = context.createMediaElementSource(this.audio);
    let analyser = context.createAnalyser();

    let ctx = this.myCanvas.nativeElement.getContext('2d');
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 256;

    let bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    let dataArray = new Uint8Array(bufferLength);
    let WIDTH = this.myCanvas.nativeElement.width;
    let HEIGHT = this.myCanvas.nativeElement.height;

    let barWidth = (WIDTH / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

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

    this.audio.play();
    renderFrame();
  }
}
