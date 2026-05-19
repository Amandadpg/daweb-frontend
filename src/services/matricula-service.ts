import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Matricula } from '../model/matricula';

@Injectable({
  providedIn: 'root',
})
export class MatriculaService {
  
  private baseUrl = environment.apiUrl + '/matricula';

  constructor(
    private _httpClient: HttpClient
  ){};

  getMatriculas(): Observable<Matricula[]>{
    return this._httpClient.get<Matricula[]>(this.baseUrl);
  }

}
