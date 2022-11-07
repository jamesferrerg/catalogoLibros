import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/libros.interface';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor( private http: HttpClient ) { }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>('http://localhost:3000/libros');
  }
  
}
