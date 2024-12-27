export type OrganizationProfileFormValues = {
  id:string;
  email: string;
  first_name: string;
  last_name: string;
  job_title: string;
  phone_numbers: string;
  country: string;
    home_address: string;
    city: string;
    state: string;
    zip_code: string;
};

export type OrganizationProfileFormModalValues={
  user:OrganizationProfileFormValues|undefined;
  action:any;
}