import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from '../../auth/model/user';
import { AuthActions } from '../../store/actions/action-types';

/* import { environment } from '../../environments/environment'; */

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User|undefined;
}

export const initialAuthState: AuthState = {
 user: undefined
};


export const authReducer = createReducer(

  initialAuthState,

  on(AuthActions.login, (state, action) => {
    return {
      state,
      user: action.user
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      state,
      user: undefined
    };
  })
);



/* export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []; */
