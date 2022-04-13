import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './overlay.component';
import { WeatherComponent } from './weather/weather.component';
import { MusicPlayerComponent } from './music-player/music-player.component';

@NgModule({
  declarations: [OverlayComponent, MusicPlayerComponent, WeatherComponent],
  imports: [CommonModule],
  exports: [OverlayComponent, MusicPlayerComponent, WeatherComponent],
})
export class OverlayModule {}
