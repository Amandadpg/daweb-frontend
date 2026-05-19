import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../model/profesor';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  
  private baseUrl = environment.apiUrl + '/profesor';

  constructor(
    private _httpClient: HttpClient
  ){};

  getProfesor(): Observable<Profesor[]>{
    return this._httpClient.get<Profesor[]>(this.baseUrl);
  }

}
