"use client";

import moment from "moment";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { AddressDetails, ConsumerInfo, PhoneNumber } from "@/types";
import { SecurityQuestionsFormValues } from "@/api/types";

const initialConsumerInfo: ConsumerInfo = {
  ssn: "",
  date_of_birth: moment().format("YYYY-MM-DD"),
};

const initialAddressDetails: AddressDetails = {
  country: "United States",
  home_address: "",
  city: "",
  state: "",
  zip_code: "",
};

const initialPhoneNumbers: PhoneNumber[] = [];

const initialSecurityQuestions:SecurityQuestionsFormValues[]=[];

const initialOnboardingValues = {
  consumerInfo: initialConsumerInfo,
  setConsumerInfo: () => {},
  addressDetails: initialAddressDetails,
  setAddressDetails: () => {},
  securityQuestions:initialSecurityQuestions,
  setSecurityQuestions: () => {},
  phoneNumbers: initialPhoneNumbers,
  setPhoneNumbers: () => {},
};

const OnboardingContext = createContext<{
  consumerInfo: ConsumerInfo;
  setConsumerInfo: Dispatch<SetStateAction<ConsumerInfo>>;
  addressDetails: AddressDetails;
  setAddressDetails: Dispatch<SetStateAction<AddressDetails>>;
  securityQuestions: SecurityQuestionsFormValues[];
  setSecurityQuestions: Dispatch<SetStateAction<SecurityQuestionsFormValues[]>>;
  phoneNumbers: PhoneNumber[];
  setPhoneNumbers: Dispatch<SetStateAction<PhoneNumber[]>>;
}>(initialOnboardingValues);

export function useOnboarding() {
  return useContext(OnboardingContext);
}

export default function OnboardingProvider(props: PropsWithChildren) {
  const [consumerInfo, setConsumerInfo] = useState(initialConsumerInfo);
  const [addressDetails, setAddressDetails] = useState(initialAddressDetails);
  const [securityQuestions, setSecurityQuestions] = useState(initialSecurityQuestions);
  const [phoneNumbers, setPhoneNumbers] = useState(initialPhoneNumbers);

  return (
    <OnboardingContext.Provider
      value={{
        consumerInfo,
        setConsumerInfo,
        addressDetails,
        setAddressDetails,
        securityQuestions,
        setSecurityQuestions,
        phoneNumbers,
        setPhoneNumbers,
      }}
      {...props}
    />
  );
}
