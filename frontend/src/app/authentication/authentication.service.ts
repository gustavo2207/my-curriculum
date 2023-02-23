import { UserService } from './user/user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private userService: UserService) { }

  login(username: string, password: string) {
    return this.httpClient.post<{message: string; token: string;}>(`${API}/user/login`, {
      userLogin: username,
      userPassword: password
    }, {
      observe: 'response'
    }).pipe(
      tap(res => {
        const authToken = res.body?.token ?? '';
        console.log(res.headers)
        this.userService.tokenSave(authToken);
      })
    )
  }
}
