export type MyEmploymentUserFormValues = {
    id:string;
    firstName: string;
    lastName: string;
    jobTitle: string;
    phoneNumbers: string;
    joiningDate: string;
    email: string;
    home_address: string;
    roleId: string;
    country: string;
    zip_code: string;
    state: string;
    city: string;
  };
  

  export type MyEmploymentUserFormModalValues=
  {
    user:MyEmploymentUserFormValues|undefined;
    action:any;
  }