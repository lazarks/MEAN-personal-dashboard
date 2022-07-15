import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './overlay.component';
import { WeatherComponent } from './weather/weather.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OverlayComponent,
    MusicPlayerComponent,
    WeatherComponent,
    VisualizerComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [OverlayComponent, MusicPlayerComponent, WeatherComponent],
})
export class OverlayModule {}
