import { AddressDetails } from "./AddressDetails";
import { ConsumerInfo } from "./ConsumerInfo";
import { PhoneNumber } from "./ContactPreferences";

export type User = {
  id: string;
  username: string;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
  company_name: string;
  job_title: string;
  address?: AddressDetails;
  phone_numbers?: PhoneNumber[];
  employee_info?: ConsumerInfo;
};
