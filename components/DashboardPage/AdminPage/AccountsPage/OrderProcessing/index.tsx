"use client";
import Typography from "@mui/material/Typography";
import FlexBox from "@/components/Common/FlexBox";
import { useState } from "react";
import SwitchButtonWithLabel from "@/components/Common/SwitchButtonWithLabel";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Box from "@mui/material/Box";
import {FormProvider, Controller } from "react-hook-form";
import Joi from "joi";
import toast from "react-hot-toast";
import Message from "@/enums/Message";
import moment, { Moment } from "moment";
import MUIFormControl from "@mui/material/FormControl";
import { FormLabel } from "@mui/material";
import { OrderProcessingFormValues } from "@/api/types/OrderProcessingFormValues";
import { useSchemaForm } from "@/hooks";
import Form from "@/components/Common/Form";

const defaultValues = {
  lastComplianceDate: "",
}

function joiMessages() {
  return {
    "string.empty": "is required",
    "string.email": "is invalid",
    "tel.invalid": "is invalid",
  };
}

const schema = Joi.object({
  lastComplianceDate: Joi.string()
    .allow("")
    .pattern(/^\d{4}-\d{2}-\d{2}$/),

}).messages(joiMessages());

type EditableFields = {
  [Key in keyof OrderProcessingFormValues]: boolean;
};

export default function OrderProcessing() {
  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema,
  });

  const [checked, setChecked] = useState(false);
  const [schedule, setSchedule] = useState(6);

  const [editableFields, setEditableFields] = useState<EditableFields>({
    lastComplianceDate: false,
  });

  const toggleEditable = (field: keyof OrderProcessingFormValues) => {
    setEditableFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = form.handleSubmit(
    (values) => {
      console.log("Form submitted with parent: ", values);
    },
    () => toast.error(Message.SomethingWrong),
  )

  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full flex-col md:flex-row justify-start items-center 2xl:items-start gap-6">
        <Typography className="text-center 2xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
          Benchmark Verification Agency
        </Typography>
        <Typography className="text-center 2xl:text-start text-3xl font-aeonik-bold text-blue400 my-2">
          - Verification Agency
        </Typography>
      </FlexBox>

      <FlexBox className="w-full flex-col md:flex-row justify-start items-center 2xl:items-start gap-6">
        <Typography className="text-center 2xl:text-start text-2xl font-aeonik-bold text-blue400 my-2">
          Report Auto Complete Status
        </Typography>

        <SwitchButtonWithLabel
          checked={checked}
          setChecked={setChecked}
          labelStyle="violet-switch-label"
          labelFirst="Off"
          labelSecond="On"
        />
      </FlexBox>
      <FlexBox className="w-full flex-col md:flex-row justify-start items-center 2xl:items-start gap-6">
        <Typography className="text-center italic 2xl:text-start text-1xl font-aeonik-bold text-blue400 my-2">
          Note: All the request from verification agency will {checked ? <span style={{ textDecoration: 'underline' }}>always go pending.</span>
            : <span style={{ textDecoration: 'underline' }}>be auto completed.</span>}
          {/* {checked
            ? "All the request from verification agency will always go pending"
            : "All the request from verification agency will be auto completed"} */}
        </Typography>
      </FlexBox>
      <FormProvider {...form}>
        <Form className="flex flex-col" onSubmit={handleSubmit} noValidate>
          <FlexBox className="w-full gap-0 md:gap-6 flex-col md:flex-row">
            <Box className="w-full md:w-1/2">
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DemoContainer components={["DateRangePicker"]}>
                  <Controller<OrderProcessingFormValues, "lastComplianceDate">
                    name="lastComplianceDate"
                    render={({
                      field: { ref, value, onChange, ...field },
                      fieldState,
                    }) => (
                      <MUIFormControl className="w-full">
                        <FormLabel
                          className={`${fieldState.error ? "text-red300" : "text-gray-700"
                            } font-aeonik py-1 px-3 text-base text-start flex items-center gap-2
                      `}
                        >
                          Last Compliance Date {fieldState.error?.message ?? ""}{" "}
                        </FormLabel>

                        <DatePicker
                          onChange={(m: Moment | null) =>
                            form.setValue(
                              "lastComplianceDate",
                              moment(m).format("YYYY-MM-DD"),
                            )
                          }
                          value={moment(form.watch("lastComplianceDate"))}
                          className="m-1 rounded-lg "
                          sx={(theme) => (
                            {
                            "& .MuiInputBase-root": {
                              height: "48px",
                              [theme.breakpoints.up("tablet")]: {
                                height: "auto",
                              },
                            },
                            ...(fieldState.error
                              ? {
                                ".MuiOutlinedInput-notchedOutline": {
                                  borderColor: `${theme.palette.error.main} !important`,
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                  borderColor: `${theme.palette.error.main} !important`,
                                },
                              }
                              : {}),
                          })}

                          disableFuture
                          inputRef={ref}
                          {...field}
                        />
                      </MUIFormControl>
                    )}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
          </FlexBox>

        </Form>
      </FormProvider>

    </FlexBox>
  );
}
