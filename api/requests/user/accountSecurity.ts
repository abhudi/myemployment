import { SecurityQuestionsFormValues } from "@/api/types";
import { UpdateSecurityQuestionsFormValues, ValidateSecurityQuestionsFormValues } from "@/api/types/SecurityQuestionsFormValues";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_USER_BASE_API_URL}/user/account-security/`;

export async function requestAccountSecurityQuestion() {
  return await axios.get<SecurityQuestionsFormValues[]>("get-security-questions", {
    baseURL,
  });
}

export function useRequestAccountSecurityQuestion() {
  return useMutation({
    mutationFn: requestAccountSecurityQuestion,
  });
}


export async function updateAccountSecurityQuestion(securityQuestions:UpdateSecurityQuestionsFormValues) {
  return await axios.post("update-security-questions",securityQuestions, {
    baseURL,
  });
}

export function useUpdateAccountSecurityQuestion() {
  return useMutation({
    mutationFn: updateAccountSecurityQuestion,
  });
}


export async function requestAccountSecurityQuestionByEmail(email:string) {
  return await axios.get<SecurityQuestionsFormValues[]>(`get-security-questions-by-email/${email}`, {
    baseURL,
  });
}

export function useRequestAccountSecurityQuestionByEmail() {
  return useMutation({
    mutationFn: requestAccountSecurityQuestionByEmail,
  });
}

export async function forgotPasswordByEmail(securityQuestions:ValidateSecurityQuestionsFormValues) {
  return await axios.post("forgot-password-by-email",securityQuestions, {
    baseURL,
  });
}

export function useForgotPasswordByEmail() {
  return useMutation({
    mutationFn: forgotPasswordByEmail,
  });
}
