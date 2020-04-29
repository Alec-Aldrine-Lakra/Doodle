import { Component, OnInit, AfterViewInit } from '@angular/core';
import {BoardControlsService} from '../board-controls.service';
const AColorPicker = require('a-color-picker');

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit, AfterViewInit {

  constructor(private color: BoardControlsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
      AColorPicker.from('.picker',{
        showRGB : false,
        showHEX: false,
        showHSL: false
      })
      .on('change', (picker, color) => {
        this.color.cursorColor.next(color);
    });
  }

  clear(){
    this.color.clear.next(true);
  }

}
