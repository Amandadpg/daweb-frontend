import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Matricula } from '../../model/matricula';
import { MatriculaService } from '../../services/matricula-service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-matriculas',
  imports: [CommonModule, RouterLink],
  templateUrl: './matriculas.html',
  styleUrl: './matriculas.css',
})
export class Matriculas {

  private baseUrl = environment.apiUrl + '/matricula';
  matriculas: Matricula[] = [];

  constructor(
    private matriculaService: MatriculaService,
    private _httpClient: HttpClient
  ) { };

  getMatriculas(): Observable<Matricula[]> {
    return this._httpClient.get<Matricula[]>(this.baseUrl);
  }

}
