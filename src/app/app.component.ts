import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AppState } from './store/index';
import { isLoggedIn, isLoggedOut } from './store/selector/auth.selectors';
import { login, logout } from './store/actions/auth.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login-app';

  isLoggedIn$?: Observable<boolean>;

  isLoggedOut$?: Observable<boolean>;

  constructor(private router: Router,
              private store: Store<AppState>) {

  }
  ngOnInit(): void {

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
