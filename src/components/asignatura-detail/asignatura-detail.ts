import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Asignatura } from '../../model/asignatura';
import { AsignaturaService } from '../../services/asignatura-service';

@Component({
  selector: 'app-asignatura-detail',
  imports: [RouterLink],
  templateUrl: './asignatura-detail.html',
  styleUrl: './asignatura-detail.css',
})
export class AsignaturaDetail {

  id!: number;
  asignatura!: Asignatura;

  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']); 
    });

    this.asignaturaService.getAsignaturaById(this.id).subscribe(asignatura => {
      this.asignatura = asignatura;
    });
    
  }

}
