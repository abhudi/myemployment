function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOT_ADMIN_DASHBOARD = "/dashboard/admin";
const ROOT_CONSUMER_DASHBOARD = "/dashboard/consumer";
const ROOT_DATA_CONTRIBUTOR_DASHBOARD = "/dashboard/data-contributor";
const ROOT_VERIFIER_DASHBOARD = "/dashboard/verifier";

export const PATH_ADMIN_DASHBOARD = {
  root: ROOT_ADMIN_DASHBOARD,
  accounts: {
    root: path(ROOT_ADMIN_DASHBOARD, "/accounts"),
  },
  pendingApprovals: {
    root: path(ROOT_ADMIN_DASHBOARD, "/pending-approvals"),
  },
  myEmploymentUsers: {
    root: path(ROOT_ADMIN_DASHBOARD, "/my-employment-users"),
  },
  dataContributorUsers: {
    root: path(ROOT_ADMIN_DASHBOARD, "/data-contributor-users"),
  },
  verifierUsers: {
    root: path(ROOT_ADMIN_DASHBOARD, "/verifier-users"),
  },
  reports: {
    root: path(ROOT_ADMIN_DASHBOARD, "/reports"),
  },
  pricing: {
    root: path(ROOT_ADMIN_DASHBOARD, "/pricing"),
  },
  compliance: {
    root: path(ROOT_ADMIN_DASHBOARD, "/compliance"),
  },
};

export const PATH_CONSUMER_DASHBOARD = {
  root: ROOT_CONSUMER_DASHBOARD,
  personal_profile: {
    root: path(ROOT_CONSUMER_DASHBOARD, "/personal-profile"),
  },
  consent_management: {
    root: path(ROOT_CONSUMER_DASHBOARD, "/consent-management"),
  },
  activity_monitoring: {
    root: path(ROOT_CONSUMER_DASHBOARD, "/activity-monitoring"),
  },
  account_security: {
    root: path(ROOT_CONSUMER_DASHBOARD, "/account-security"),
  },
  support: {
    root: path(ROOT_CONSUMER_DASHBOARD, "/support"),
  },
  settings: {
    root: path(ROOT_CONSUMER_DASHBOARD, "/settings"),
  },
};

export const PATH_DATA_CONTRIBUTOR_DASHBOARD = {
  root: ROOT_DATA_CONTRIBUTOR_DASHBOARD,
  data_submission: {
    root: path(ROOT_DATA_CONTRIBUTOR_DASHBOARD, "/data-submission"),
  },
  report_access: {
    root: path(ROOT_DATA_CONTRIBUTOR_DASHBOARD, "/report-access"),
  },
  data_access: {
    root: path(ROOT_DATA_CONTRIBUTOR_DASHBOARD, "/data-access"),
  },
  compliance_reporting: {
    root: path(ROOT_DATA_CONTRIBUTOR_DASHBOARD, "/compliance-reporting"),
  },
  integrations: {
    root: path(ROOT_DATA_CONTRIBUTOR_DASHBOARD, "/integrations"),
  },
  reporting: {
    root: path(ROOT_DATA_CONTRIBUTOR_DASHBOARD, "/reporting"),
  },
  account_security: {
    root: path(ROOT_DATA_CONTRIBUTOR_DASHBOARD, "/account-security"),
  },
  settings: {
    root: path(ROOT_DATA_CONTRIBUTOR_DASHBOARD, "/settings"),
  },
};

export const PATH_VERIFIER_DASHBOARD = {
  root: ROOT_VERIFIER_DASHBOARD,
  verification_request: {
    root: path(ROOT_VERIFIER_DASHBOARD, "/verification-request"),
  },
  report_access: {
    root: path(ROOT_VERIFIER_DASHBOARD, "/report-access"),
  },
  management: {
    root: path(ROOT_VERIFIER_DASHBOARD, "/management"),
  },
  compliance_center: {
    root: path(ROOT_VERIFIER_DASHBOARD, "/compliance-center"),
  },
  billing_invoicing: {
    root: path(ROOT_VERIFIER_DASHBOARD, "/billing-invoicing"),
  },
  integration_api: {
    root: path(ROOT_VERIFIER_DASHBOARD, "/integration-api"),
  },
  account_security: {
    root: path(ROOT_VERIFIER_DASHBOARD, "/account-security"),
  },
  settings: {
    root: path(ROOT_VERIFIER_DASHBOARD, "/settings"),
  },
};
