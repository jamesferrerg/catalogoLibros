import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private usuarioService: UsuariosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  usuario: Usuario = {
    nombres: '',
    email: '',
    password: ''
  }

  guardar() {
    if (this.usuario.nombres?.trim().length === 0) {
      return;
    }

    this.usuarioService.agregarUsuario(this.usuario)
      .subscribe(usuario => {
        this.router.navigate(['/auth/login', usuario.id]);
      })
  }

}
