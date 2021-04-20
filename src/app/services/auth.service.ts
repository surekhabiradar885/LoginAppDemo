import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { User } from '../auth/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData?: User;
 login$?: Observable<User>;

  constructor() { }
 // login(payload) Observable<User>{

  login(payload: any): Observable<User> {
    this.userData = payload;
    console.log('    obs.next(payload)',  (payload));
    this.login$ = new Observable((obs) => {
      setTimeout(() => {
       // payload.status = true
          obs.next(payload);
      }, 1000);
    });
    return this.login$;
  }



}
