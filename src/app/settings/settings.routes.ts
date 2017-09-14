import { Route } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { AdminComponent } from './admin/admin.component';
import { PersonalComponent } from './personal/personal.component';

const CHILD_ROUTES: Route[] = [
  { path: '', pathMatch: 'full' , component: PersonalComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'personal', component: PersonalComponent }
];


export const MODULE_ROUTES: Route[] = [
  { path: 'settings', component: SettingsComponent, children: [ ...CHILD_ROUTES ] }
];

export const MODULE_COMPONENTS = [
  SettingsComponent, PersonalComponent, AdminComponent
];
