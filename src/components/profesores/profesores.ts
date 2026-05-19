import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Profesor } from '../../model/profesor';
import { ProfesorService } from '../../services/profesor-service';

@Component({
  selector: 'app-profesores',
  imports: [CommonModule, RouterLink],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css',
})
export class Profesores {
  
  profesores: Profesor[] = [];
  
  constructor(
    private profesorService: ProfesorService
  ){};

  ngOnInit(): void {
    this.profesorService.getProfesor().subscribe(data => {
      this.profesores = data;
    })
  }

}
