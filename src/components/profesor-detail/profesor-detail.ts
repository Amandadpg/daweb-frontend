import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Profesor } from '../../model/profesor';
import { ProfesorService } from '../../services/profesor-service';

@Component({
  selector: 'app-profesor-detail',
  imports: [RouterLink],
  templateUrl: './profesor-detail.html',
  styleUrl: './profesor-detail.css',
})
export class ProfesorDetail {

  id!: number;
  profesor!: Profesor;

  constructor(private route: ActivatedRoute, private profesorService: ProfesorService) { }


}
