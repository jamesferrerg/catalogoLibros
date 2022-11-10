import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  public mensaje: boolean = false;

  private baseUrl: string = environment.baseUrl;

  getUsuarios( termino: string ): Observable<Usuario[]> {
    let algo = `${ this.baseUrl }/usuarios?q=${ termino }`;
    return this.http.get<Usuario[]>(`${ this.baseUrl }/usuarios?q=${ termino }`);
  }

  agregarUsuario( usuario: Usuario ): Observable<Usuario> {
    this.mensaje = true;
    return this.http.post<Usuario>(`${this.baseUrl}/usuarios`, usuario);
  }

}
