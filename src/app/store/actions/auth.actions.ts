import { createAction, props } from '@ngrx/store';
import {User} from '../../auth/model/user';

export const login = createAction(
    '[Login Page] User Login',
    props<{user: User}>()
);
/* export const loginfailure = createAction(
    "[Login Page] User Login Failure",
    props<{error: any}>()
   (errorMessage = 'Error logging in') => ({ payload: { errorMessage }})
); */

export const logout = createAction(
  '[Top Menu] Logout'
);
