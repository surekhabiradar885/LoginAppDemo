import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import {Store, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { reducers } from './store/index';
import { AuthModule } from './auth/auth.module';
import {environment} from '../environments/environment';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers  /* {
      metaReducers
    } */
   ),
StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  ],
  providers: [AuthService, Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
