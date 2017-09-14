// import { Routes, RouterModule } from '@angular/router';
import { MenuType, RouteInfo } from './nav.metadata';
// const routes: Routes = [
//   {  },
// ];

// export const NavRoutes = RouterModule.forChild(routes);

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Angular2 Bootstrap4 Navbar', menuType: MenuType.BRAND },
  { path: 'home', title: 'Home', menuType: MenuType.LEFT },
  { path: 'settings', title: 'Settings', menuType: MenuType.RIGHT }
];
