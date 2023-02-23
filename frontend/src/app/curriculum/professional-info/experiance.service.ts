import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiance, ExperianceDTO } from './experiance';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ExperianceService {
  constructor(protected httpClient: HttpClient) {}

  getExperiance(): Observable<Experiance[]> {
    return this.httpClient.get<Experiance[]>(`${API}/experiance`);
  }

  putExperiance(id: string, body:{title?: string, description?: string}) {
    return this.httpClient.put(`${API}/experiance/${id}`, body)
  }

  createExperiance(body: ExperianceDTO) {
    return this.httpClient.post(`${API}/experiance`, body)
  }

  deleteExperiance(id: string) {
    return this.httpClient.delete<Experiance[]>(`${API}/experiance/${id}`);
  }
}
