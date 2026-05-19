import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatriculaService } from '../../services/matricula-service';
import { Matricula } from '../../model/matricula';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-alumnos',
  imports: [CommonModule, RouterLink],
  templateUrl: './tabla-alumnos.html',
  styleUrl: './tabla-alumnos.css',
})
export class TablaAlumnos {

  matriculasFiltradas: Matricula[] = [];

  constructor(
    private matriculaService: MatriculaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.matriculaService.getMatriculas().subscribe(data => {
        this.matriculasFiltradas = data.filter(m => m.asignatura?.id === Number(id));
      });
    }
  }

}
