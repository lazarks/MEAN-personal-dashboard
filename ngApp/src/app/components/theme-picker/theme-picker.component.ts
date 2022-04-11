import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
})
export class ThemePickerComponent implements OnInit {
  constructor(private utils: UtilsService) {}

  ngOnInit(): void {}

  changeColor(value: any) {
    this.utils.colorChange.next(value.value);
  }
}
