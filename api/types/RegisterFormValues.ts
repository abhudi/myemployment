export type RegisterFormValues = {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  job_title: string;
  company_name: string;
  signup_reason: string;
  permissible_purposes: {
    for_employment_purposes: boolean;
    by_written_instruction: boolean;
    for_consumer_initiated_transaction: boolean;
  };
};
