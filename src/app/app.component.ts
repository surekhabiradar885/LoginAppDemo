import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

import {AppState} from './store/index';
import {isLoggedIn, isLoggedOut} from './store/selector/auth.selectors';
import {login, logout} from './store/actions/auth.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'login-app';
  loading = true;

  isLoggedIn$?: Observable<boolean>;

  isLoggedOut$?: Observable<boolean>;

  constructor(private router: Router,
              private store: Store<AppState>) {

  }
  ngOnInit(): void {

     // this.router.events.subscribe(event => {...});
     // this.store.subscribe(state => console.log("store value", state));
  /*   const userProfile = localStorage.getItem("user");

    if (userProfile) {
        this.store.dispatch(login({user: JSON.parse(userProfile)}));
    } */
    console.log("isLoggedIn ",  this.isLoggedIn$);
    console.log("isLoggedOut ",  this.isLoggedOut$);

  this.isLoggedIn$ = this.store
        .pipe(
          select(isLoggedIn)
        );

    this.isLoggedOut$ = this.store
      .pipe(
     
            select(isLoggedOut)
        );

}

logout(): void {

    this.store.dispatch(logout());

}

}
