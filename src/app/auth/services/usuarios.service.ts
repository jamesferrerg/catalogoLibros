import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  public mensaje: boolean = false;

  agregarUsuario(usuario: Usuario): Observable<Usuario> {
    this.mensaje = true;
    return this.http.post<Usuario>('http://localhost:3000/usuarios', usuario);
  }

}
