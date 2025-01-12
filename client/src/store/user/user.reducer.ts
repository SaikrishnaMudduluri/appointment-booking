import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logout } from './user.actions';
import { UserState, initialState } from './user.state';

export const userReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoggedIn: true,
  })),
  on(logout, (state) => ({
    ...state,
    user: null,
    isLoggedIn: false,
  }))
);