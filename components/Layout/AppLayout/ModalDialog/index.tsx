import Modal from "@mui/material/Modal";
import { FC, Fragment } from "react";

import {
  ConfirmationModal,
  SetUpEmailMfaModal,
  SetUpOtpModal,
  AddEditUserModal,
  AddEditUserWithRoleModal
} from "@/components/Common/Modals";
import {
  useHideModal,
  useModalPayload,
  useModalType,
} from "@/store/hooks/modal";
import { ModalType } from "@/store/types/modal";

export default function ModalDialog() {
  const modalType = useModalType();
  const modalPayload = useModalPayload();
  const hideModal = useHideModal();

  const Content: FC<any> = {
    [ModalType.None]: Fragment,
    [ModalType.SetUpOTP]: SetUpOtpModal,
    [ModalType.Confirmation]: ConfirmationModal,
    [ModalType.SetUpEmailMfa]: SetUpEmailMfaModal,
    [ModalType.AddEditUser]: AddEditUserModal,
    [ModalType.AddEditUserWithRole]: AddEditUserWithRoleModal,
  }[modalType];

  return (
    <Modal open={!!modalType} onClose={hideModal}>
      <>
        <Content {...modalPayload} />
      </>
    </Modal>
  );
}
