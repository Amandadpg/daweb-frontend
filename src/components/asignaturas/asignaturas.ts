import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Asignatura } from '../../model/asignatura';
import { AsignaturaService } from '../../services/asignatura-service';

@Component({
  selector: 'app-asignaturas',
  imports: [CommonModule, RouterLink],
  templateUrl: './asignaturas.html',
  styleUrl: './asignaturas.css',
})
export class Asignaturas {

  asignaturas: Asignatura[] = [];
  
  constructor(
    private asignaturaService: AsignaturaService
  ){};

  ngOnInit(): void {
    this.asignaturaService.getAsignaturas().subscribe(data => {
      this.asignaturas = data;
    })
  }
}
