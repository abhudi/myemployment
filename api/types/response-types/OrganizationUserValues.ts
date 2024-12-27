type OrganizationUserValues = {
    [x: string]: any;
    id: string;
    username?: string;
    email?: string;
    role?: string;
    first_name?: string;
    last_name?: string;
    company_name?: string;
    job_title?: string;
    phone_numbers?: string;
    address?: string;
    primary_phone_numbers?: string,
    isSuperUser?: boolean,
    dateJoined?: string,
    signup_reason?: string
  };

  type OrganizationUserDataResponseValues=
 {
    totalCount: number;
    organizationUsers: OrganizationUserValues[];
  }