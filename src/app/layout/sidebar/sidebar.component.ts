import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
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
    MatIconModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
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
    this.router.navigate([id]);
  }

  cerrarSesion() {

  }

  click(){
    console.log('click')
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  expandSidebar() {
    this.isExpanded = true;
  }

  collapseSidebar() {
    this.isExpanded = false;
  }
}
