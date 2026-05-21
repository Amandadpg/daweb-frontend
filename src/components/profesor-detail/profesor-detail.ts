import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Profesor } from '../../model/profesor';
import { ProfesorService } from '../../services/profesor-service';

@Component({
  selector: 'app-profesor-detail',
  standalone: true, 
  imports: [RouterLink],
  templateUrl: './profesor-detail.html',
  styleUrl: './profesor-detail.css',
})
export class ProfesorDetail implements OnInit {

  id!: number;
  profesor!: Profesor;

  constructor(private route: ActivatedRoute, private profesorService: ProfesorService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']); 
      this.profesorService.getProfesorById(this.id).subscribe(profesor => {
        this.profesor = profesor;
      });
    });
  }
}