import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

import { ConfirmationFormValues, SetUpOTPFormValues } from "@/api/types";

export enum ModalType {
  None,
  SetUpOTP,
  Confirmation,
  SetUpEmailMfa,
  AddEditUser,
  AddEditUserWithRole,
}

export type ResetPasswordModalProps = {
  id: string;
};

export type ModalPayload =
  | SetUpOTPFormValues
  | ConfirmationFormValues
  | undefined;

export type ModalState = {
  type: ModalType;
  payload?: ModalPayload;
};

type ModalCaseReducer<T = void> = CaseReducer<ModalState, PayloadAction<T>>;

export type ModalCaseReducers = {
  showModal: ModalCaseReducer<{
    type: ModalType;
    payload?: ModalPayload;
  }>;
  hideModal: ModalCaseReducer;
};
