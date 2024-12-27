type PendingApprovalValues = {
    id: string;
    username?: string;
    email?: string;
    role?: string;
    first_name?: string;
    last_name?: string;
    company_name?: string;
    job_title?: string;
    phone_numbers?: string;
    signup_reason?: string;
  };

  type PendingApprovalDataResponseValues=
 {
    totalCount: number;
    pendingApprovals: PendingApprovalValues[];
  }