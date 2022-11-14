import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Libro } from '../../interfaces/libros.interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  libros: Libro[] = [];

  constructor( private libroService: LibrosService) { }

  ngOnInit(): void {
    this.libros = this.libroService.shoppingCar;
    this.totalCar();
  }

  descartar( idBook: number ) {
    let indice = this.libros.findIndex( book => book.id === idBook);
    this.libros.splice(indice, 1);
  }

  totalCar() {
    let suma = this.libros.reduce( (acumulador, actual) => acumulador + actual.precio!, 0 );
    return suma;
  }

}
