import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ControlsComponent } from './controls/controls.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { MessageComponent } from './message/message.component';
import { InitialsPipe } from './initials.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ControlsComponent,
    ChatboxComponent,
    MessageComponent,
    InitialsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
