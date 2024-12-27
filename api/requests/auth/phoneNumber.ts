import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { PhoneNumber } from "@/types";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/auth/`;

type UpdatePhoneNumbersFormValues = {
  phone_numbers: PhoneNumber[];
};

// == Update phone numbers == //
export async function requestUpdatePhoneNumbers(
  values: UpdatePhoneNumbersFormValues,
) {
  const { data } = await axios.post("change-phone-numbers/", values, {
    baseURL,
  });

  return data;
}

export function useUpdatePhoneNumbers() {
  return useMutation({
    mutationFn: requestUpdatePhoneNumbers,
  });
}
