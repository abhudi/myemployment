import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  token?: string;
  mfa_token?:string;
  available_mfa_methods?: string[];
};

type AuthCaseReducer<T = void> = CaseReducer<AuthState, PayloadAction<T>>;

export type AuthCaseReducers = {
  login: AuthCaseReducer<AuthState>;
  logout: AuthCaseReducer;
};
