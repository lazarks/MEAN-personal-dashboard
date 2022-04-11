import { Component, EventEmitter, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
})
export class ThemePickerComponent implements OnInit {
  clr: string = '';
  constructor(private utils: UtilsService) {}

  ngOnInit(): void {
    this.clr = this.utils.dColor;
  }

  changeColor(event: any) {
    let value = event.target.value;
    this.clr = value;
    this.utils.dColor = value;
    this.utils.colorChange.next(value);
  }
}
