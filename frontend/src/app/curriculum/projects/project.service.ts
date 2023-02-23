import { exhaustAll, Observable, tap, toArray } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project';
import {DomSanitizer} from '@angular/platform-browser';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(protected httpClient: HttpClient, protected sanitizer: DomSanitizer) { }

  getProjectInformation(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${API}/projects`).pipe(
      exhaustAll(),
      tap((project) => project.imageUrl = this.sanitizer.bypassSecurityTrustUrl(project.url)),
      tap((project) => project.urlGithub = this.sanitizer.bypassSecurityTrustUrl(project.urlGithub as string)),
      tap((project) => project.urlProject = this.sanitizer.bypassSecurityTrustUrl(project.urlProject as string)),
      toArray(),
    );
  }
}
