import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReadingService } from './reading.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { MultiPlayerRoomComponent } from './multi-player-room/multi-player-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    MultiPlayerRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ReadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
