"use client";

import Typography from "@mui/material/Typography";
import Joi from "joi";
import { Controller, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";

import { useContact } from "@/api/requests/admin/contact";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import LoadingButton from "@/components/Common/LoadingButton";
import Message from "@/enums/Message";
import { useSchemaForm } from "@/hooks";
import { ContactDetails } from "@/types";

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  content: "",
};

function joiMessages() {
  return {
    "string.empty": "is required",
    "string.email": "is invalid",
  };
}

const schema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  content: Joi.string().required(),
}).messages(joiMessages());

export default function ContactPage() {
  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema,
  });

  const { mutateAsync: contact, isPending } = useContact();

  const handleSubmit = form.handleSubmit(
    (values) =>
      contact(values)
        .then(() => toast.success(Message.ContactSuccess))
        .then(() => form.reset()),
    () => toast.error(Message.SomeInvalidFields),
  );

  return (
    <FlexBox className="w-full max-w-desktop relative mb-10">
      <img
        draggable={false}
        src="/assets/img/home/oldHome-3/legal/logo.png"
        alt=""
        className="w-3/4 md:w-min absolute z-10 left-0 top-1/2 -translate-y-1/2"
      />
      <Container className="w-11/12 max-w-container my-5 sm:my-10 md:my-20 flex-col items-center text-center relative">
        <FlexBox className="w-full flex-col items-center z-20">
          <Typography className="text-2xl sm:3xl md:text-4xl xl:text-5xl text-blue400 font-aeonik-bold">
            Contact Us
          </Typography>

          <img
            draggable={false}
            src="/assets/img/home/contact/image.png"
            alt=""
            className="ms-4 lg:ms-0 w-full md:w-4/5 2xl:w-min z-20"
          />

          <FormProvider {...form}>
            <Form
              className="w-11/12 sm:w-4/5 md:w-2/3 2xl:w-1/2 flex flex-col"
              onSubmit={handleSubmit}
              noValidate
            >
              <FlexBox className="w-full justify-between gap-0 md:gap-4 flex-col md:flex-row">
                <Controller<ContactDetails, "first_name">
                  name="first_name"
                  render={({ field, fieldState }) => (
                    <FormControl
                      className="mb-0 sm:mb-4 text-start w-full"
                      color={fieldState.error && "error"}
                      label={`First Name ${fieldState.error?.message || ""}`}
                      autoFocus
                      labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                      inputStyle="p-1 bg-light50 rounded-lg"
                      {...field}
                    />
                  )}
                />

                <Controller<ContactDetails, "last_name">
                  name="last_name"
                  render={({ field, fieldState }) => (
                    <FormControl
                      className="mb-0 sm:mb-4 text-start w-full"
                      color={fieldState.error && "error"}
                      label={`Last Name ${fieldState.error?.message || ""}`}
                      labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                      inputStyle="p-1 bg-light50 rounded-lg"
                      {...field}
                    />
                  )}
                />
              </FlexBox>

              <Controller<ContactDetails, "email">
                name="email"
                render={({ field, fieldState }) => (
                  <FormControl
                    className="mb-0 sm:mb-4 text-start w-full"
                    color={fieldState.error && "error"}
                    label={`Email ${fieldState.error?.message || ""}`}
                    labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                    inputStyle="p-1 bg-light50 rounded-lg"
                    {...field}
                  />
                )}
              />

              <Controller<ContactDetails, "content">
                name="content"
                render={({ field, fieldState }) => (
                  <FormControl
                    className="mb-4 text-start w-full"
                    color={fieldState.error && "error"}
                    label={`Message ${fieldState.error?.message || ""}`}
                    labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
                    inputStyle="p-1 bg-light50 rounded-lg"
                    outlinedInputStyle="h-auto"
                    multiline
                    minRows={4}
                    {...field}
                  />
                )}
              />

              <LoadingButton
                fullWidth
                variant="contained"
                className="rounded-3xl py-2 sm:py-3 font-aeonik-bold text-base md:text-xl"
                type="submit"
                loading={isPending}
              >
                Send
              </LoadingButton>
            </Form>
          </FormProvider>
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
