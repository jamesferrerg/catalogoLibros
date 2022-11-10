import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  public mostrar: boolean = false;
  public userInvalido: boolean = false;
  termino: string = '';
  usuarios: Usuario[] = [];
  usuariolog: Usuario = {};

  ngOnInit(): void {
    this.temporizador();
  }

  ngOnDestroy(): void {
    this.temporizador();
  }

  temporizador() {
    if (this.usuariosService.mensaje) {
      this.mostrar = true;
      setTimeout(() => {
        this.mostrar = false;
      }, 4000);
    }
  }

  login() {
    if (this.usuariolog.email == null) {
      this.usuariolog.email = '';
    }

    this.usuariosService.getUsuarios(this.usuariolog.email || '')
      .subscribe(usuarios => {
        this.usuarios = usuarios;
      });

    console.log(JSON.stringify(this.usuarios));

    if (this.buscar(this.usuarios)) {
      this.router.navigate(['/home/libros/listado-libros'])
    }

  }

  buscar( allUsers: Usuario[] ) {
    let existe = allUsers.filter(
      usuario => (usuario.email == this.usuariolog.email && usuario.password == this.usuariolog.password)
    )

    if (existe.length != 0) {
      return true;
    }
    this.userInvalido = true;
    return false;
  }

}
