import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { LibroComponent } from './pages/libro/libro.component';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [
  {
    path: 'libros',
    component: HomeComponent, 
    children: [
      {
        path: 'listado-libros',
        component: ListadoComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: 'carrito',
        component: CarritoComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'libros'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class LibrosRoutingModule { }
