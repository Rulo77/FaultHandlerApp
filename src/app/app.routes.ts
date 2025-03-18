import { Routes } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TablillasComponent } from './pages/tablillas/tablillas.component';
import { ConfigComponent } from './pages/config/config.component';
import { MachinesComponent } from './pages/machines/machines.component';

export const routes: Routes = [
    {
        path: '',
        component:  SidebarComponent,
        canActivate: [],
        children: [
          {
            path: 'tablillas',
            component:  TablillasComponent
          },
          {
            path: 'config',
            component:  ConfigComponent
          },
          {
            path: 'machines',
            component:  MachinesComponent
          }
        ]
      },

    ];
