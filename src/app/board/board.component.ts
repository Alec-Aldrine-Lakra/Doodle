import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {BoardControlsService} from '../board-controls.service';
import { fromEvent, Observable } from 'rxjs';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  ccolor: string;
  w: number;
  ctx: any;
  prevX: number;
  prevY: number;
  currX: number;
  currY: number;
  mouseup: Observable<Event>;
  mousedown: Observable<Event>;
  mouseout: Observable<Event>;
  mousemove: Observable<Event>;
  flag: boolean;
  dot_flag: boolean;

  constructor(private color: BoardControlsService) {
    this.prevX = 0;
    this.prevY = 0;
    this.currX = 0;
    this.currY = 0;
    this.w = 3;
  }

  ngOnInit(): void {



    this.color.cursorColor.subscribe(res=>{
      if(res){
        this.ccolor = res;
      } 
    },err=>{
      console.log(err);
    })

    this.color.clear.subscribe(res=>{
      if(res === true){
        this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      }
    })
  }

  ngAfterViewInit(){
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.mouseup = fromEvent(this.canvas.nativeElement, 'mouseup');
    this.mousedown = fromEvent(this.canvas.nativeElement, 'mousedown');
    this.mouseout = fromEvent(this.canvas.nativeElement, 'mouseout');
    this.mousemove = fromEvent(this.canvas.nativeElement, 'mousemove');

    this.mouseup.subscribe(res=>{
      this.findxy('up', res);
    })
    this.mousedown.subscribe(res=>{
      this.findxy('down', res);
    })
    this.mouseout.subscribe(res=>{
      this.findxy('out', res);
    })
    this.mousemove.subscribe(res=>{
      this.findxy('move', res);
    })
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.prevX, this.prevY);
    this.ctx.lineTo(this.currX, this.currY);
    this.ctx.strokeStyle = this.ccolor;
    this.ctx.lineWidth = this.w;
    this.ctx.stroke();
    this.ctx.closePath();
  }
  
  findxy(res, e) {
    if (res == 'down') {
        this.prevX = this.currX;
        this.prevY = this.currY;
        this.currX = e.clientX - this.canvas.nativeElement.offsetLeft;
        this.currY = e.clientY - this.canvas.nativeElement.offsetTop;

        this.flag = true;
        this.dot_flag = true;
        if (this.dot_flag) {
            this.ctx.beginPath();
            this.ctx.fillStyle = this.ccolor;
            this.ctx.fillRect(this.currX, this.currY, 2, 2);
            this.ctx.closePath();
            this.dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        this.flag = false;
    }
    if (res == 'move') {
        if (this.flag) {
            this.prevX = this.currX;
            this.prevY = this.currY;
            this.currX = e.clientX - this.canvas.nativeElement.offsetLeft;
            this.currY = e.clientY - this.canvas.nativeElement.offsetTop;
            this.draw();
        }
    }
  }
}
