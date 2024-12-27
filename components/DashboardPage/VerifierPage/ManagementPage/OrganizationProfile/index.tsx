"use client";
// import Typography from "@mui/material/Typography";
// import Joi from "joi";
// import moment, { Moment } from "moment";
// import { matchIsValidTel, MuiTelInput } from "mui-tel-input";
// import { useEffect, useRef, useState } from "react";
// import { OrganizationProfileFormValues } from "@/api/types";
// import FlexBox from "@/components/Common/FlexBox";
// import { useSchemaForm } from "@/hooks";
// import OrganizationProfileForm from "../Common/OrganizationProfileForm";
// import toast from "react-hot-toast";
// import Message from "@/enums/Message";

// const defaultValues = {
//   firstName: "Kelvin",
//   lastName: "Hearts",
//   userName: "KHearts",
//   jobTitle: "Admin",
//   companyName: "Apple",
//   phoneNo: "+1 234 567 8990",
//   signUpReason: "managing task",
//   joiningDate: moment().format("YYYY-MM-DD"),
//   registrationNumber: "+1 234 567 8990",
//   emailAddress: "test@myemployment.com",
//   contactInformation: "+1 234 567 8990",
//   address: "New York"
// };

// function joiMessages() {
//   return {
//     "string.empty": "is required",
//     "string.email": "is invalid",
//     "tel.invalid": "is invalid",
//   };
// }

// const schema = Joi.object({
//   firstName: Joi.string().required(),
//   lastName: Joi.string().required(),
//   userName: Joi.string().required(),
//   jobTitle: Joi.string().required(),
//   companyName: Joi.string().required(),
//   signUpReason: Joi.string().required(),
//   joiningDate: Joi.string()
//     .required()
//     .pattern(/^\d{4}-\d{2}-\d{2}$/),
//   emailAddress: Joi.string()
//     .required()
//     .email({ tlds: { allow: false } }),
//   contactInformation: Joi.string()
//     .allow("")
//     .custom((value, helpers) =>
//       matchIsValidTel(value) ? value : helpers.error("tel.invalid"),
//     ),
//   address: Joi.string(),
// }).messages(joiMessages());

// type EditableFields = {
//   [Key in keyof OrganizationProfileFormValues]: boolean;
// };

// export default function OrganizationProfile() {
//   const form = useSchemaForm({
//     mode: "onSubmit",
//     defaultValues,
//     schema,
//   });

//   const [editableFields, setEditableFields] = useState<EditableFields>({
//     firstName: false,
//     lastName: false,
//     userName:false,
//     companyInformation: false,
//     joiningDate: false,
//     jobTitle:false,
//     companyName: false,
//     signUpReason: false,
//     phoneNo:false,
//     emailAddress: false,
//     contactInformation: false,
//     address: false,
//   });

//   const toggleEditable = (field: keyof OrganizationProfileFormValues) => {
//     setEditableFields((prev) => ({ ...prev, [field]: !prev[field] }));
//   };

//   const handleSubmit = form.handleSubmit(
//     (values) => {
//       console.log("Form submitted with parent: ", values);
//     },
//     () => toast.error(Message.SomethingWrong),
//   )

//   return (
//     <FlexBox className="flex-col items-center 2xl:items-start bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full 2xl:w-3/5 rounded-2xl border border-slate-200 shadow-card">
//       <Typography className="w-full text-center 2xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
//         Organization Profile
//       </Typography>

//       <OrganizationProfileForm form={form}
//         editableFields={editableFields}
//         toggleEditable={toggleEditable}
//         handleSubmit={handleSubmit}
//       />

//     </FlexBox>
//   );
// }

import { Controller, useForm } from "react-hook-form";
import {
  FormLabel,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  BorderColor as BorderColorIcon,
  Check as CheckIcon,
} from "@mui/icons-material";
import clsx from "clsx";
import { useOrganizationUserList } from "@/api/requests/dashboard/organizationUserList";
import { useDraggable } from "react-use-draggable-scroll";
import Box from "@mui/material/Box";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Button from "@/components/Common/Button";
import MUIFormControl from "@mui/material/FormControl";
import FormControl from "@/components/Common/FormControl";
import FlexBox from "@/components/Common/FlexBox";
import { OrganizationProfileFormValues } from "@/api/types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import moment, { Moment } from "moment";

type EditableFields = {
  [Key in keyof OrganizationUserValues]: boolean;
};

export default function OrganizationProfile() {
  const form = useForm();
    const [editableFields, setEditableFields] = useState<EditableFields>({
      id: true,
    first_name: true,
    last_name: true,
    username: true,
    email: true,
    role: true,
    company_name: true,
    job_title: true,
    phone_numbers: true,
    address: true,
    primary_phone_numbers: true,
    isSuperUser: true,
    dateJoined: true,
    signup_reason: true,
  });

  const toggleEditable = (field: keyof OrganizationUserValues) => {
    setEditableFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const [organizationUserDataList, setRows] = useState<
    OrganizationUserValues[]
  >([]);
  const { mutateAsync: organizationUserList, isPending: isLoading } =
    useOrganizationUserList();

  const { control, setValue, handleSubmit } = useForm();

  const fetchData = () => {
    organizationUserList({
      requestDto: {
        organizationId: 4,
        organizationTypeId: 1,
      },
    })
      .then((response) => {
        const filteredUsers = response.data.filter(
          (user: any) => user.role === "Employer_Admin",
        );
        setRows(filteredUsers);
      })
      .catch((error) => toast.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <FlexBox className="flex-col items-center 2xl:items-start bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full 2xl:w-3/5 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="w-full text-center 2xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        Organization Profile
      </Typography>
      <Box
        ref={ref}
        {...events}
        className="w-full flex flex-col items-center 2xl:items-start mt-4 gap-0 md:gap-4"
      >
        {organizationUserDataList.map((user, i) => (
          <>
            <FlexBox
              key={i}
              className="w-full gap-0 md:gap-6 flex-col md:flex-row"
            >
              <Box className="w-full md:w-1/2">
                <Controller
                  name="firstName"
                  defaultValue={user.first_name}
                  control={control} // Pass control prop from useForm
                  render={({ field, fieldState }) => (
                    <FormControl
                      className="text-start w-full"
                      color={fieldState.error && "error"}
                      label={`First Name ${fieldState.error?.message ?? ""}`}
                      labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                      outlinedInputStyle="h-auto"
                      inputStyle="p-1 rounded-lg"
                      disabled={true} // Name is read-only
                      endAdornment={
                        <IconButton
                          onClick={() => {}}
                          className={clsx("bg-none")}
                        >
                          <BorderColorIcon className="text-xl" />
                        </IconButton>
                      }
                      {...field}
                    />
                  )}
                />
              </Box>
              <Box className="w-full md:w-1/2">
                <Controller
                  name="lastName"
                  defaultValue={user.last_name}
                  control={control} // Pass control prop from useForm
                  render={({ field, fieldState }) => (
                    <FormControl
                      className="text-start w-full"
                      color={fieldState.error && "error"}
                      label={`Last Name ${fieldState.error?.message ?? ""}`}
                      labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                      outlinedInputStyle="h-auto"
                      inputStyle="p-1 rounded-lg"
                      disabled={true} // Name is read-only
                      endAdornment={
                        <IconButton
                          onClick={() => {}}
                          className={clsx("bg-none")}
                        >
                          <BorderColorIcon className="text-xl" />
                        </IconButton>
                      }
                      {...field}
                    />
                  )}
                />
              </Box>
            </FlexBox>
            <FlexBox
              key={i}
              className="w-full gap-0 md:gap-6 flex-col md:flex-row"
            >
              <Box className="w-full md:w-1/2">
                <Controller
                  name="role"
                  defaultValue={user.role}
                  control={control} // Pass control prop from useForm
                  render={({ field, fieldState }) => (
                    <FormControl
                      className="text-start w-full"
                      color={fieldState.error && "error"}
                      label={`Role ${fieldState.error?.message ?? ""}`}
                      labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                      outlinedInputStyle="h-auto"
                      inputStyle="p-1 rounded-lg"
                      disabled={true} // Name is read-only
                      endAdornment={
                        <IconButton
                          onClick={() => {}}
                          className={clsx("bg-none")}
                        >
                          <BorderColorIcon className="text-xl" />
                        </IconButton>
                      }
                      {...field}
                    />
                  )}
                />
              </Box>
              <Box className="w-full md:w-1/2">
                <Controller
                  name="email"
                  defaultValue={user.email}
                  control={control} // Pass control prop from useForm
                  render={({ field, fieldState }) => (
                    <FormControl
                      className="text-start w-full"
                      color={fieldState.error && "error"}
                      label={`Email ${fieldState.error?.message ?? ""}`}
                      labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                      outlinedInputStyle="h-auto"
                      inputStyle="p-1 rounded-lg"
                      disabled={true} // Name is read-only
                      endAdornment={
                        <IconButton
                          onClick={() => {}}
                          className={clsx("bg-none")}
                        >
                          <BorderColorIcon className="text-xl" />
                        </IconButton>
                      }
                      {...field}
                    />
                  )}
                />
              </Box>
            </FlexBox>
            <FlexBox
              key={i}
              className="w-full gap-0 md:gap-6 flex-col md:flex-row"
            >
              <Box className="w-full md:w-1/2">
                <Controller
                  name="role"
                  defaultValue={user.role}
                  control={control} // Pass control prop from useForm
                  render={({ field, fieldState }) => (
                    <FormControl
                      className="text-start w-full"
                      color={fieldState.error && "error"}
                      label={`Role ${fieldState.error?.message ?? ""}`}
                      labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                      outlinedInputStyle="h-auto"
                      inputStyle="p-1 rounded-lg"
                      disabled={true} // Name is read-only
                      endAdornment={
                        <IconButton
                          onClick={() => {}}
                          className={clsx("bg-none")}
                        >
                          <BorderColorIcon className="text-xl" />
                        </IconButton>
                      }
                      {...field}
                    />
                  )}
                />
              </Box>
              <Box className="w-full md:w-1/2">
                <Controller
                  name="email"
                  defaultValue={user.email}
                  control={control} // Pass control prop from useForm
                  render={({ field, fieldState }) => (
                    <FormControl
                      className="text-start w-full"
                      color={fieldState.error && "error"}
                      label={`Email ${fieldState.error?.message ?? ""}`}
                      labelStyle="text-base font-aeonik py-1 px-3 text-gray-700"
                      outlinedInputStyle="h-auto"
                      inputStyle="p-1 rounded-lg"
                      disabled={true} // Name is read-only
                      endAdornment={
                        <IconButton
                          onClick={() => {}}
                          className={clsx("bg-none")}
                        >
                          <BorderColorIcon className="text-xl" />
                        </IconButton>
                      }
                      {...field}
                    />
                  )}
                />
              </Box>
            </FlexBox>
          </>
         
        ))}
      </Box>
    </FlexBox>
  );
}
