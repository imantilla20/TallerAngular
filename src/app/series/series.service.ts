import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './series';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }
}
