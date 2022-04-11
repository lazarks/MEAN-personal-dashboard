import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  dColor: string = '#0088a9';
  colorChange: Subject<string> = new Subject<string>();

  constructor() {}
}
