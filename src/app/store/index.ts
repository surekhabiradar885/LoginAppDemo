import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import * as auth from './../auth/reducers/index';




export interface AppState {
 // authState: auth.AuthState;
}
export const reducers = {
    router: routerReducer
};
export function logger(reducer: ActionReducer<any>)
  : ActionReducer<any> {
  return (state, action) => {
    console.log('state before: ', state);
    console.log('action', action);


    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<AppState>[] =
  [ logger];
