import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';

import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import {AuthService} from '../services/auth.service';
import * as fromAuth from './reducers';
import { authReducer } from '../auth/reducers/index';
import { authFeatureKey} from './reducers';
// import {AuthGuard} from './auth.guard';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from '../store/effects/auth.effects';
// import * as fromAuth from './reducers';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([{ path: '', component: LoginComponent }]),
        StoreModule.forFeature(fromAuth.authFeatureKey, authReducer,
          /*   { metaReducers: fromAuth.metaReducers } */),
       // StoreModule.forFeature('auth', authReducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class AuthModule {
    static forRoot(): ModuleWithProviders<AuthModule> {
        return {
            ngModule: AuthModule,
            providers: [
              AuthService,
              //  AuthGuard
            ]
        };
    }
}
