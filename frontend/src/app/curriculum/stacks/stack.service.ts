import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stack } from './stack';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class StackService {
  constructor(protected httpClient: HttpClient) {}

  getStacks(): Observable<Stack[]> {
    return this.httpClient.get<Stack[]>(`${API}/stack`);
  }
}
