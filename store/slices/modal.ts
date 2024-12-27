import { createSlice } from "@reduxjs/toolkit";

import { ModalCaseReducers, ModalState, ModalType } from "../types/modal";

const initialState = {
  type: ModalType.None,
};

export const { actions, reducer } = createSlice<
  ModalState,
  ModalCaseReducers,
  "modal",
  {}
>({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    hideModal: (state) => ({
      ...state,
      type: ModalType.None,
      payload: undefined,
    }),
  },
});
