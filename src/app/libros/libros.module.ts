import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { LibroComponent } from './pages/libro/libro.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { LibrosRoutingModule } from './libros-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './pages/modal/modal.component';



@NgModule({
  declarations: [
    BuscarComponent,
    LibroComponent,
    HomeComponent,
    ListadoComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ]
})
export class LibrosModule { }
