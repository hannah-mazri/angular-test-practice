import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReversePipe} from './demo';



@NgModule({
  declarations: [ReversePipe],
  imports: [
    CommonModule
  ]
})
export class DemoModule { }
