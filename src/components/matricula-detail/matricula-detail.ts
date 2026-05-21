import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Matricula } from '../../model/matricula';
import { MatriculaService } from '../../services/matricula-service';

@Component({
  selector: 'app-matricula-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './matricula-detail.html',
  styleUrl: './matricula-detail.css',
})
export class MatriculaDetail implements OnInit { 

  idMat!: number;
  matricula!: Matricula;

  constructor(private route: ActivatedRoute, private matriculaService: MatriculaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idMat = Number(params['id']); 
      this.matriculaService.getMatriculaById(this.idMat).subscribe(matricula => {
        this.matricula = matricula;
      });
    });
  }
}