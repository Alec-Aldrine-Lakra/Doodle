import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardControlsService {
  cursorColor;
  clear;
  constructor() {
    this.cursorColor = new BehaviorSubject('black');
    this.clear = new BehaviorSubject(false);
  }
}
