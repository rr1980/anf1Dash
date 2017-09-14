import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './settings.routes';
// import { AdminComponent } from './admin/admin.component';
// import { PersonalComponent } from './personal/personal.component';

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(MODULE_ROUTES) ],
  declarations: [ MODULE_COMPONENTS]
})
export class SettingsModule { }
