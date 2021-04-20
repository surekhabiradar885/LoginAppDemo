import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule  } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { AuthState } from '../../auth/reducers/index';
import { AuthService } from '../../services/auth.service';
import { reducers, metaReducers } from '../../store/index';

class TestRouterComponent {
}

const config: Routes = [
    {
        path: '', component: TestRouterComponent
    }
];

describe('LoginComponent', () => {
  let component: LoginComponent;
  let store: Store<AuthState>;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule, RouterModule,
      //  StoreModule.forRoot({ reducers }),
      StoreModule.forRoot (reducers, { metaReducers })
      ],
      providers: [AuthService],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
