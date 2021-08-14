import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ModalModule} from './modal/modal.module';
import { HomeComponent } from './home/home.component';
import { TestPageComponent } from './test-page/test-page.component';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from './button/button.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule,
    ButtonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
