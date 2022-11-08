import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  public mostrar: boolean = false;

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
}
