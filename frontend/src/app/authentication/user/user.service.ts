import {Injectable} from '@angular/core';
import {TokenService} from '../token.service';
import {User} from './user';
import {User as UserInformation} from '../../curriculum/user'
import jwt_decode from 'jwt-decode';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.haveToken()) {
      this.decoderJWT();
    }
  }

  private decoderJWT() {
    const token = this.tokenService.tokenReturn();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  userReturn() {
    let returnUser!: {payload: UserInformation[]};

    this.userSubject.asObservable().subscribe((user) => returnUser = user as {payload: UserInformation[]})

    return returnUser.payload[0];
  }

  tokenSave(token: string) {
    this.tokenService.saveToken(token);
    this.decoderJWT();
  }

  logout() {
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  isLogged() {
    return this.tokenService.haveToken();
  }
}
