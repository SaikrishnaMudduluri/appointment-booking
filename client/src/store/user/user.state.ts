import { User } from "../../interface/user";

export interface UserState {
  user: User | null;
  isLoggedIn: boolean;
}

export const initialState: UserState = {
  user: null,
  isLoggedIn: false,
};