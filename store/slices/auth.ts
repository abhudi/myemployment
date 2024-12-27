import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AuthCaseReducers, AuthState } from "../types/auth";

const initialState = {};

export const { actions, ...slice } = createSlice<
  AuthState,
  AuthCaseReducers,
  "auth",
  {}
>({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      return { ...state, token: payload.token };
    },
    logout: () => initialState,
  },
});

export const reducer = persistReducer(
  {
    key: "myEmployment-auth",
    version: 1,
    storage,
  },
  slice.reducer,
);
