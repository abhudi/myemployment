type VerifierUserValues = {
    id: string;
    username?: string;
    email?: string;
    role?: string;
    first_name?: string;
    last_name?: string;
    full_name?: string;
    company_name?: string;
    job_title?: string;
    phone_numbers?: string;
    address?: string;
  };

  type VerifierUserDataResponseValues=
 {
    totalCount: number;
    verifierUsers: VerifierUserValues[];
  }