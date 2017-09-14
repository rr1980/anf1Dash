import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { NavModule } from './nav/nav.module';
import { HomeModule } from './home/home.module';
import { SettingsModule } from './settings/settings.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SettingsModule,
    NavModule,
    RouterModule.forRoot([])
  ],
  // exports: [
  //   RouterModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
