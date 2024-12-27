import { useMutation } from "@tanstack/react-query";
import axios from 'axios';
const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/consumerProfile/`;

  
  export async function consumerProfileGetDetails(userId: string) {
    return await axios.get(`get-consumerProfile/${userId}`, {
      baseURL,
    });
  }

  export const useConsumerProfileGetDetails = () => {

    return useMutation({
      mutationFn: (userId: string) => consumerProfileGetDetails(userId),
    });
  };