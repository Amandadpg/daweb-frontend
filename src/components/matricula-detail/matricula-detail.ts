import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Matricula } from '../../model/matricula';
import { MatriculaService } from '../../services/matricula-service';

@Component({
  selector: 'app-matricula-detail',
  imports: [RouterLink],
  templateUrl: './matricula-detail.html',
  styleUrl: './matricula-detail.css',
})
export class MatriculaDetail {

  idMat!: number;
  matricula!: Matricula;

  constructor(private route: ActivatedRoute, private matriculaService: MatriculaService) { }

  ngOnInit(): void {

  }

}
