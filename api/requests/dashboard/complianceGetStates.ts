import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';

const baseURL = `${process.env.NEXT_PUBLIC_MY_EMPLOYMENT_BASE_API_URL}/Compliance/`;

// API call function to fetch state list
export async function getStateList() {
  return await axios.get('get-state-list', {
    baseURL,
  });
}

// Custom hook to call the API
export const ComplianceGetStates = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: getStateList,  // Use the getStateList API function
    onSuccess: (data) => {
      console.log('State List:', data);  // Log the state list response to the console
    },
    onError: (error) => {
      console.error('Error fetching state list:', error);  // Log any errors
    }
  });
};
