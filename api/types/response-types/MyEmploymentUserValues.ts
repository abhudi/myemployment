type MyEmploymentUserValues = {
    id: string;
    username?: string;
    email?: string;
    role?: string;
    first_name?: string;
    last_name?: string;
    company_name?: string;
    job_title?: string;
    phone_numbers?: string;
  };

  type MyEmploymentDataResponseValues=
 {
    totalCount: number;
    myEMploymentUser: MyEmploymentUserValues[];
  }