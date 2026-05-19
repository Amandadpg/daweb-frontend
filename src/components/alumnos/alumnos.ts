import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Alumno } from '../../model/alumno';
import { AlumnoService } from '../../services/alumno-service';

@Component({
  selector: 'app-alumnos',
  imports: [CommonModule, RouterLink],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css',
})
export class Alumnos implements OnInit{
  
  alumnos: Alumno[] = [];
  
  constructor(
    private alumnoService: AlumnoService
  ){};

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe(data => {
      this.alumnos = data;
    })
  }
  
}
