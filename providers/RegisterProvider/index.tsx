"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { AccountDetails, AccountSetupInfo } from "@/types";

const initialAccountDetails: AccountDetails = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  job_title: "",
  company_name: "",
  signup_reason: "",
  verifierAgencyTypeId:0
};

const initialAccountSetupInfo: AccountSetupInfo = {
  accountType: "",
  permissible_purposes: {
    for_employment_purposes: false,
    by_written_instruction: false,
    for_consumer_initiated_transaction: false,
  },
};

const initialRegisterValues = {
  accountDetails: initialAccountDetails,
  setAccountDetails: () => {},
  accountSetupInfo: initialAccountSetupInfo,
  setAccountSetupInfo: () => {},
  step: 1,
  setStep: () => {},
};

const RegisterContext = createContext<{
  accountDetails: AccountDetails;
  setAccountDetails: Dispatch<SetStateAction<AccountDetails>>;
  accountSetupInfo: AccountSetupInfo;
  setAccountSetupInfo: Dispatch<SetStateAction<AccountSetupInfo>>;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}>(initialRegisterValues);

export function useRegister() {
  return useContext(RegisterContext);
}

export default function RegisterProvider(props: PropsWithChildren) {
  const [step, setStep] = useState(1);
  const [accountDetails, setAccountDetails] = useState(initialAccountDetails);
  const [accountSetupInfo, setAccountSetupInfo] = useState(
    initialAccountSetupInfo,
  );

  return (
    <RegisterContext.Provider
      value={{
        accountDetails,
        setAccountDetails,
        accountSetupInfo,
        setAccountSetupInfo,
        step,
        setStep,
      }}
      {...props}
    />
  );
}
