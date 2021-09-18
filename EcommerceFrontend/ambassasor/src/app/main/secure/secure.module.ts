import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RankingsComponent } from './rankings/rankings.component';
import { StatsComponent } from './stats/stats.component';



@NgModule({
  declarations: [
    ProfileComponent,
    RankingsComponent,
    StatsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SecureModule { }
