import { Routes } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TablillasComponent } from './pages/tablillas/tablillas.component';
import { ConfigComponent } from './pages/config/config.component';
import { MachinesComponent } from './pages/machines/machines.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/sidebar/sidebar.component').then(m => m.SidebarComponent),
       // component:  SidebarComponent,
        canActivate: [],
        children: [
          {
            path: 'tablillas',
            loadComponent: () => import('./pages/tablillas/tablillas.component').then(m => m.TablillasComponent),
           // component:  TablillasComponent
          },
          {
            path: 'config',
            loadComponent: () => import('./pages/config/config.component').then(m => m.ConfigComponent),
           // component:  ConfigComponent
          },
          {
            path: 'machines',
            loadComponent: () => import('./pages/machines/machines.component').then(m => m.MachinesComponent),
           // component:  MachinesComponent
          }
        ]
      },

    ];
