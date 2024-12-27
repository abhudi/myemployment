import { AddressDetails, ConsumerInfo, PhoneNumber } from "@/types";

export type OnboardingFormValues = {
  employee_info?: ConsumerInfo;
  address: AddressDetails;
  phone_numbers: PhoneNumber[];
  
};
