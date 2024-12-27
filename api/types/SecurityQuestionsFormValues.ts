export type SecurityQuestionsFormValues = {
  securityQuestionId: string;
  questionText: string;
  answerId: string;
  answer: string;
};

export type UpdateSecurityQuestionsFormValues={
  securityQuestions:SecurityQuestionsFormValues[];
}

export type ValidateSecurityQuestionsFormValues={
  email:string;
  securityQuestions:SecurityQuestionsFormValues[];
}