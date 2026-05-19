import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { MatriculaService } from '../../services/matricula-service';
import { Matricula } from '../../model/matricula';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-matriculas-aprobadas',
  imports: [CommonModule, RouterLink],
  templateUrl: './matriculas-aprobadas.html',
  styleUrl: './matriculas-aprobadas.css',
})
export class MatriculasAprobadas implements OnInit {
  private baseUrl = environment.apiUrl + '/matricula';
  matriculasAprobadas: Matricula[] = [];

  constructor(
    private matriculaService: MatriculaService
  ) { }

  ngOnInit(): void {
    this.matriculaService.getMatriculas().subscribe(data => {
      this.matriculasAprobadas = data.filter(matricula => matricula.notaMedia >= 5);
    });
  }
}
