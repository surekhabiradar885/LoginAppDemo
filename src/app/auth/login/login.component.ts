import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Store, } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import {noop} from 'rxjs';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { User } from '../model/user';
import { AppState } from '../../store/index';
import { login, } from '../../store/actions/auth.actions';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
 // getState: Observable<any>;
  errorMessage: null;
  form: FormGroup;



  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>){
  //  this.getState = this.store.select(selectAuthState);
  this.form = fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6), Validators.maxLength(20)]]
});


  }

  ngOnInit(): void {
  /*   this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    }); */
    }

  onSubmit(): void {

    const val = this.form.value;
    const payload = { email: val.email, password: val.password };
    this.auth.login(payload)
      .pipe(
        tap((user: any) => {

          console.log(user);

          this.store.dispatch(login({ user }));
          this.router.navigateByUrl('/home');


        })
      )
      .subscribe(
        // NO operation for succesful login
        noop,
        () => alert('Login Failed'),
      //  this.store.dispatch(loginfailure({ error: 'Login Failed' }))
      );
  }
}
