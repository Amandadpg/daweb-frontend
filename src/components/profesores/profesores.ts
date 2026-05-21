import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Profesor } from '../../model/profesor';
import { ProfesorService } from '../../services/profesor-service';

@Component({
  selector: 'app-profesores',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css',
})
export class Profesores implements OnInit {
  
  profesores: Profesor[] = [];
  
  constructor(
    private profesorService: ProfesorService
  ) {}

  ngOnInit(): void {
    this.profesorService.getProfesores().subscribe((data: Profesor[]) => {
      this.profesores = data;
    });
  }
}