import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { ContactFormValues } from "@/api/types";

const baseURL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/admin/contact/`;

// == Contact == //
export async function requestContact(values: ContactFormValues) {
  return await axios.post("", values, {
    baseURL,
  });
}

export function useContact() {
  return useMutation({
    mutationFn: requestContact,
  });
}
