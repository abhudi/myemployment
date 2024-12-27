import {
  PATH_ADMIN_DASHBOARD,
  PATH_CONSUMER_DASHBOARD,
  PATH_DATA_CONTRIBUTOR_DASHBOARD,
  PATH_VERIFIER_DASHBOARD,
} from "@/utils/path";

export const adminNavLinks = [
  {
    label: "Accounts",
    path: PATH_ADMIN_DASHBOARD.accounts.root,
    icon: "/assets/img/dashboard/sidebar/admin/accounts.png",
  },
  {
    label: "Pending Approvals",
    path: PATH_ADMIN_DASHBOARD.pendingApprovals.root,
    icon: "/assets/img/dashboard/sidebar/admin/compliance.png",
  },
  {
    label: "My Employment Users",
    path: PATH_ADMIN_DASHBOARD.myEmploymentUsers.root,
    icon: "/assets/img/dashboard/sidebar/admin/compliance.png",
  },
  {
    label: "Data Contributor Users",
    path: PATH_ADMIN_DASHBOARD.dataContributorUsers.root,
    icon: "/assets/img/dashboard/sidebar/admin/compliance.png",
  },
  {
    label: "Verifier Users",
    path: PATH_ADMIN_DASHBOARD.verifierUsers.root,
    icon: "/assets/img/dashboard/sidebar/admin/compliance.png",
  },
  {
    label: "Reports",
    path: PATH_ADMIN_DASHBOARD.reports.root,
    icon: "/assets/img/dashboard/sidebar/admin/reports.png",
  },
  {
    label: "Pricing",
    path: PATH_ADMIN_DASHBOARD.pricing.root,
    icon: "/assets/img/dashboard/sidebar/admin/pricing.png",
  },
  {
    label: "Compliance",
    path: PATH_ADMIN_DASHBOARD.compliance.root,
    icon: "/assets/img/dashboard/sidebar/admin/compliance.png",
  },
];

export const consumerNavLinks = [
  {
    label: "Dashboard",
    path: PATH_CONSUMER_DASHBOARD.root,
    icon: "/assets/img/dashboard/sidebar/root.png",
  },
  {
    label: "Personal Profile",
    path: PATH_CONSUMER_DASHBOARD.personal_profile.root,
    icon: "/assets/img/dashboard/sidebar/consumer/personal-profile.png",
  },
  {
    label: "Consent Management",
    path: PATH_CONSUMER_DASHBOARD.consent_management.root,
    icon: "/assets/img/dashboard/sidebar/consumer/consent-management.png",
  },
  {
    label: "Activity Monitoring",
    path: PATH_CONSUMER_DASHBOARD.activity_monitoring.root,
    icon: "/assets/img/dashboard/sidebar/consumer/activity-monitoring.png",
  },
  {
    label: "Account Security",
    path: PATH_CONSUMER_DASHBOARD.account_security.root,
    icon: "/assets/img/dashboard/sidebar/consumer/account-security.png",
  },
  {
    label: "Support",
    path: PATH_CONSUMER_DASHBOARD.support.root,
    icon: "/assets/img/dashboard/sidebar/consumer/support.png",
  },
];

export const dataContributorNavLinks = [
  {
    label: "Dashboard",
    path: PATH_DATA_CONTRIBUTOR_DASHBOARD.root,
    icon: "/assets/img/dashboard/sidebar/root.png",
  },
  {
    label: "Data Submission",
    path: PATH_DATA_CONTRIBUTOR_DASHBOARD.data_submission.root,
    icon: "/assets/img/dashboard/sidebar/dataContributor/data-submission.png",
  },
  {
    label: "Report Access",
    path: PATH_DATA_CONTRIBUTOR_DASHBOARD.report_access.root,
    icon: "/assets/img/dashboard/sidebar/verifier/report-access.png",
  },
  // {
  //   label: "Data Access",
  //   path: PATH_DATA_CONTRIBUTOR_DASHBOARD.data_access.root,
  //   icon: "/assets/img/dashboard/sidebar/dataContributor/data-access.png",
  // },
  // {
  //   label: "Compliance Reporting",
  //   path: PATH_DATA_CONTRIBUTOR_DASHBOARD.compliance_reporting.root,
  //   icon: "/assets/img/dashboard/sidebar/dataContributor/compliance-reporting.png",
  // },
  // {
  //   label: "Integrations",
  //   path: PATH_DATA_CONTRIBUTOR_DASHBOARD.integrations.root,
  //   icon: "/assets/img/dashboard/sidebar/dataContributor/integrations.png",
  // },
  // {
  //   label: "Reporting",
  //   path: PATH_DATA_CONTRIBUTOR_DASHBOARD.reporting.root,
  //   icon: "/assets/img/dashboard/sidebar/dataContributor/reporting.png",
  // },
  {
    label: "Account Security",
    path: PATH_DATA_CONTRIBUTOR_DASHBOARD.account_security.root,
    icon: "/assets/img/dashboard/sidebar/dataContributor/account-security.png",
  },
];

export const verifierNavLinks = [
  {
    label: "Dashboard",
    path: PATH_VERIFIER_DASHBOARD.root,
    icon: "/assets/img/dashboard/sidebar/root.png",
  },
  {
    label: "Verification Request",
    path: PATH_VERIFIER_DASHBOARD.verification_request.root,
    icon: "/assets/img/dashboard/sidebar/verifier/verification-request.png",
  },
  {
    label: "Report Access",
    path: PATH_VERIFIER_DASHBOARD.report_access.root,
    icon: "/assets/img/dashboard/sidebar/verifier/report-access.png",
  },
  {
    label: "Management",
    path: PATH_VERIFIER_DASHBOARD.management.root,
    icon: "/assets/img/dashboard/sidebar/verifier/management.png",
  },
  {
    label: "Compliance Center",
    path: PATH_VERIFIER_DASHBOARD.compliance_center.root,
    icon: "/assets/img/dashboard/sidebar/verifier/compliance-center.png",
  },
  // {
  //   label: "Billing and Invoicing",
  //   path: PATH_VERIFIER_DASHBOARD.billing_invoicing.root,
  //   icon: "/assets/img/dashboard/sidebar/verifier/billing-invoicing.png",
  // },
  {
    label: "Integration and API",
    path: PATH_VERIFIER_DASHBOARD.integration_api.root,
    icon: "/assets/img/dashboard/sidebar/verifier/integration-api.png",
  },
  {
    label: "Account Security",
    path: PATH_VERIFIER_DASHBOARD.account_security.root,
    icon: "/assets/img/dashboard/sidebar/verifier/account-security.png",
  },
];

export const navConfig = {
  admin: {
    links: adminNavLinks,
  },
  consumer: {
    links: consumerNavLinks,
    settingsLink: PATH_CONSUMER_DASHBOARD.settings.root,
  },
  dataContributor: {
    links: dataContributorNavLinks,
    settingsLink: PATH_DATA_CONTRIBUTOR_DASHBOARD.settings.root,
  },
  verifier: {
    links: verifierNavLinks,
    settingsLink: PATH_VERIFIER_DASHBOARD.settings.root,
  },
};
