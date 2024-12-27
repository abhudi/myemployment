import { useDispatch } from "react-redux";

import { ConfirmationFormValues, SetUpOTPFormValues } from "@/api/types";

import { actions } from "../slices/modal";
import { ModalPayload, ModalType } from "../types/modal";

import useStoreSelector from "./useStoreSelector";
import { OrganizationProfileFormModalValues } from "@/api/types/OrganizationProfileFormValues";
import { MyEmploymentUserFormModalValues } from "@/api/types/MyEmploymentUserFormValues";

export function useShowModal() {
  const dispatch = useDispatch();
  return (type: ModalType, payload?: ModalPayload) =>
    dispatch(actions.showModal({ type, payload }));
}

export function useHideModal() {
  const dispatch = useDispatch();
  return () => dispatch(actions.hideModal());
}

export function useModalType() {
  return useStoreSelector<ModalType>(({ modal }) => modal.type);
}

export function useModalPayload() {
  return useStoreSelector<ModalPayload>(({ modal }) => modal.payload);
}

export function useShowSetUpOtpModal() {
  const showModal = useShowModal();
  return (payload: SetUpOTPFormValues) =>
    showModal(ModalType.SetUpOTP, payload);
}

export function useShowConfirmationModal() {
  const showModal = useShowModal();
  return (payload: ConfirmationFormValues) =>
    showModal(ModalType.Confirmation, payload);
}

export function useShowSetUpEmailMfaModal() {
  const showModal = useShowModal();
  return (payload: SetUpOTPFormValues) =>
    showModal(ModalType.SetUpEmailMfa, payload);
}


export function useShowAddEditUserModal() {
  const showModal = useShowModal();
  return (payload: OrganizationProfileFormModalValues) =>
    showModal(ModalType.AddEditUser, payload);
}

export function useShowAddEditUserWithRoleModal() {
  const showModal = useShowModal();
  return (payload: MyEmploymentUserFormModalValues) =>
    showModal(ModalType.AddEditUserWithRole, payload);
}