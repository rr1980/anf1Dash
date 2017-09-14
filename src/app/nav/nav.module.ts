import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
// import { ROUTES } from './nav.routing';

@NgModule({
  imports: [
    // RouterModule.forRoot(ROUTES),
    RouterModule,
    CommonModule
  ],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class NavModule {

}
