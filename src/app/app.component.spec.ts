import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule} from '@ngrx/store';
import { AuthService } from './services/auth.service';
import { authReducer } from './auth/reducers/index';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(authReducer)
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
    // const store = fixture.debugElement.injector.get(Store);
     expect(app).toBeTruthy();
  });

  it(`should have as title 'login-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    console.log('app.title ', app.title);
    expect(app.title).toEqual('login-app');
  });

});
