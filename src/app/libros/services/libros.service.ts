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

  constructor( private http: HttpClient ) { }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${ this.baseUrl }/libros`);
  }

  getByTitulo( titulo: string ): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${ this.baseUrl }/libros?titulo_like=${ titulo }`);
  }
  
}
