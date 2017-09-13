import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavModule } from './nav/nav.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
