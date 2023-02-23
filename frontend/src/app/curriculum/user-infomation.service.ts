import { PersonalInfos } from './curriculum-management/profile/edit-personal-infos/personal-infos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { User } from './user';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class UserInfomationService {
  constructor(protected httpClient: HttpClient) {}

  getUserInformation(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${API}/user`);
  }

  putUserInformation(id: string, body: PersonalInfos | {aboutMe: string}) {
    return this.httpClient.patch(`${API}/user/${id}`, body)
  }
}
