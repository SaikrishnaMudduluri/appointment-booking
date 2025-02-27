import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
  selectUserState,
  (state) => state.user
);

export const selectIsLoggedIn = createSelector(
  selectUserState,
  (state) => state.isLoggedIn
);