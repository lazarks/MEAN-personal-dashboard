import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  colorChange: Subject<string> = new Subject<string>();

  constructor() {}
}
