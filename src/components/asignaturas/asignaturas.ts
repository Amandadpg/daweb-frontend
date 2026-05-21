import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Asignatura } from '../../model/asignatura';
import { AsignaturaService } from '../../services/asignatura-service';

@Component({
  selector: 'app-asignaturas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './asignaturas.html',
  styleUrl: './asignaturas.css',
})
export class Asignaturas implements OnInit {

 asignaturas: Asignatura[] = [];
  
  constructor(
    private asignaturaService: AsignaturaService
  ) {}

  ngOnInit(): void {
    this.asignaturaService.getAsignaturas().subscribe(data => {
      this.asignaturas = data;
    });
  }
}