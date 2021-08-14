import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeroComponent } from './dashboard-hero.component';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [DashboardHeroComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
