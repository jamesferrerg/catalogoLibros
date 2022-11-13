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
  uniqAutor: Libro[] = [];
  titulo: string = '';
  autorBusqueda: string = '';
  existe: boolean = false;

  constructor(private libroService: LibrosService, private router: Router) { }

  ngOnInit(): void {
    this.filtroAutor();
  }

  buscarTitulo() {
    this.libroService.getByTitulo(this.titulo).subscribe(
      libro => {
        this.libros = libro;
        if (libro.length > 0) {
          this.existe = false;
        } else {
          this.existe = true;
        }
      });
  }

  filtroAutor() {
    this.libroService.getLibros().subscribe(
      libros => {
        this.uniqAutor = libros;

        this.uniqAutor = this.uniqAutor.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.autor === value.autor && t.autor === value.autor
          ))
        );
      });
  }

  buscarAutor() {
    console.log(this.autorBusqueda)
    this.libroService.getByAutor(this.titulo).subscribe(
      libro => {
        this.libros = libro;
        if (libro.length > 0) {
          this.existe = false;
        } else {
          this.existe = true;
        }
      });
  }

}
