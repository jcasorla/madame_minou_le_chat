import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { MultiPlayerRoomComponent } from './multi-player-room/multi-player-room.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'reading-room', pathMatch: "full"},
  { path: 'reading-room', component: RoomComponent },
  // { path: 'multiplayer', component: MultiPlayerRoomComponent }

   //   // the ** will catch anything that did not match any of the above routes
   {  path: '**',  redirectTo: 'reading-room',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
