import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() text: string;
  @Input() timestamp: number;
  @Input() user: string;
  @Input() userId: number;
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(){
    if(this.userId === 45354){
      return true;
    }
    return false;
  }

}
