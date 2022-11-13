import { Component, OnInit } from '@angular/core';
import { Libro } from '../../interfaces/libros.interface';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public libroService: LibrosService) { }

  ngOnInit(): void {
  }

}
