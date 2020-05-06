import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  messages = [
    {userId: 45354, user: "Alec", text: "Hello love", timestamp: "01:44:51 AM"},
    {userId: 45352, user: "Joyce", text: "Hello hate", timestamp: " 01:19:46 PM"},
    {userId: 45354, user: "Alec", text: "Hello love", timestamp: "08:38:54 PM"},
    {userId: 46354, user: "Suraj", text: "Hello hate", timestamp: "06:27:26 AM"},
    {userId: 45354, user: "Alec", text: "Hello love", timestamp: "09:37:01 AM"},
    {userId: 48354, user: "Arjun", text: "Hello hate", timestamp: "12:09:21 PM"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
