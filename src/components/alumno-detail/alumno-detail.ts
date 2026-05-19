import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Alumno } from '../../model/alumno';
import { AlumnoService } from '../../services/alumno-service';

@Component({
  selector: 'app-alumno-detail',
  imports: [RouterLink],
  templateUrl: './alumno-detail.html',
  styleUrl: './alumno-detail.css',
})
export class AlumnoDetail implements OnInit{

  id!: number;
  alumno!: Alumno;

  constructor(private route: ActivatedRoute, private alumnoService: AlumnoService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']); 
    });

    this.alumnoService.getAlumnoById(this.id).subscribe(alumno => {
      this.alumno = alumno;
    });
    
  }
  
}
