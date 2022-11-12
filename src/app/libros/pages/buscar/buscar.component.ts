import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Router } from '@angular/router';
import { Libro } from '../../interfaces/libros.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  libros: Libro[] = [];
  titulo: string = '';

  constructor(private libroService: LibrosService, private router: Router) { }

  ngOnInit(): void {
  }

  buscarTitulo( ){
    this.libroService.getByTitulo( this.titulo ).subscribe(
      libro => {
        this.libros = libro;
        console.log(this.libros);
      });
  }

}
