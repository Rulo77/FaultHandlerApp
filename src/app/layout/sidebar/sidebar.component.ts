import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'
import { Router } from '@angular/router';
menu: []  = [
  {
    name: "Perfil",
    redirectTo: "/perfil",
    icon: "person-outline"
  },
  {
    name: "Ayuda",
    redirectTo: "/ayuda",
    icon: "help-circle-outline"
  },
]
@Component({
  selector: 'app-sidebar',
  imports: [
    MatSidenavModule,
     MatFormFieldModule,
      MatSelectModule, 
      MatButtonModule, 
      MatIconModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  isExpanded = false;
  expandirMenu = false;
  lenguaje = 'es';
  esEspaniol = false;
  mostrarMenuLateral = false;
  username = 'Raul Gomez';
  title = 'ClientApp';

  // nombreUsuario: string;
  // menus: MenuModulo[];
  cantidadMenu: boolean[] = [];


  constructor(
    private router: Router,
   // private authS: AuthService,
  ) {

  }

  ngOnInit(): void {
   
  }

  salir() {
    // this.router.navigate(['']);
  }

  limpiaBtns() {

  }

  redirect(id: string) {
 
  }

  cerrarSesion() {

  }

  click(){
    console.log('click')
  }
}
