import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Asignatura } from '../model/asignatura';

@Injectable({
  providedIn: 'root',
})
export class AsignaturaService {
    
  private baseUrl = environment.apiUrl + '/asignatura';

  constructor(
    private _httpClient: HttpClient
  ){};

  getAsignaturas(): Observable<Asignatura[]>{
    return this._httpClient.get<Asignatura[]>(this.baseUrl);
  }

  getAsignaturaById(id: number): Observable<Asignatura>{
    return this._httpClient.get<Asignatura>(this.baseUrl + "/" + id);
  }

}
