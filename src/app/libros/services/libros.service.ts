import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/libros.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private baseUrl: string = environment.baseUrl;
  shoppingCar: Libro[] = [];

  constructor( private http: HttpClient ) { }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${ this.baseUrl }/libros`);
  }

  getByTitulo( titulo: string ): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${ this.baseUrl }/libros?titulo_like=${ titulo }`);
  }

  getByAutor( autor: string ): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${ this.baseUrl }/libros?autor_like=${ autor }`);
  }

  getById( id: number ) : Observable<Libro[]> {
    let lbr = `${ this.baseUrl }/libros?id=${ id }`;
    return this.http.get<Libro[]>(`${ this.baseUrl }/libros?id=${ id }`);
  }

  addCarBook( book: Libro ) {
    this.shoppingCar.push(book);
    console.log(this.shoppingCar)
  }
  
}
