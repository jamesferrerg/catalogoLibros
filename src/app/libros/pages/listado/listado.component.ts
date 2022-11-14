import { Component, OnInit, Input } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Libro } from '../../interfaces/libros.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  libros: Libro[] = [];
  libroDetalle: Libro[] = [{}];

  constructor( private librosService: LibrosService) { }

  ngOnInit(): void {
    this.librosService.getLibros().subscribe( libros => { this.libros = libros });
  }

  getLibro( id : number ) {
    this.librosService.getById(id).subscribe( book => {
      this.libroDetalle = book;
    });
  }

  agregarCarrito( book: Libro ) {
    this.librosService.addCarBook(book);
  }

}
