"use client";

import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Joi from "joi";
import { useState } from "react";
import { Controller, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";

import { SupportTicketFormValues } from "@/api/types";
import Button from "@/components/Common/Button";
import CustomSelectIcon from "@/components/Common/CustomSelectIcon";
import FlexBox from "@/components/Common/FlexBox";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import SingleFileDropzone from "@/components/Common/SingleFileDropzone";
import Message from "@/enums/Message";
import { useSchemaForm } from "@/hooks";

const defaultValues = {
  ticketDetail: "",
};

function joiMessages() {
  return {
    "string.empty": "is required",
  };
}

const schema = Joi.object({
  ticketDetail: Joi.string().required(),
}).messages(joiMessages());

export default function SubmitSupportTicket() {
  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema,
  });

  const [issue, setIssue] = useState("Account Issue");
  const [selectOpen, setSelectOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = form.handleSubmit(
    (values) => {
      console.log(values);
    },
    () => toast.error(Message.SomethingWrong),
  );

  return (
    <FlexBox className="w-full 2xl:w-2/3 flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-6">
        Submit a Support Ticket
      </Typography>

      <FormProvider {...form}>
        <Form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit}
          noValidate
        >
          <FlexBox className="flex-col">
            <FormLabel className="text-base sm:text-lg text-blue400 my-2">
              Select a Issue
            </FormLabel>
            <Select
              value={issue}
              onChange={(e) => setIssue(e.target.value as string)}
              onOpen={() => setSelectOpen(true)}
              onClose={() => setSelectOpen(false)}
              IconComponent={(props) => (
                <CustomSelectIcon open={selectOpen} {...props} />
              )}
              className="w-full text-neutral-700 px-1 text-base border-none rounded-lg"
            >
              <MenuItem value="Account Issue">Account Issue</MenuItem>
            </Select>
          </FlexBox>

          <Controller<SupportTicketFormValues, "ticketDetail">
            name="ticketDetail"
            render={({ field, fieldState }) => (
              <FlexBox className="flex-col">
                <FormLabel className="text-base sm:text-lg text-blue400 my-2">
                  Provide Ticket Details
                </FormLabel>
                <FormControl
                  multiline
                  minRows={4}
                  className="mb-2 text-start w-full"
                  color={fieldState.error && "error"}
                  outlinedInputStyle="min-h-20"
                  inputStyle="rounded-lg"
                  type="text"
                  placeholder="Short description of the issue...."
                  {...field}
                />
              </FlexBox>
            )}
          />

          <FlexBox className="w-full flex-col items-center sm:items-start">
            <FormLabel className="text-base sm:text-lg text-blue400">
              Attach a file, screenshot{" "}
              <span className="text-neutral-700">(Optional)</span>
            </FormLabel>

            <SingleFileDropzone file={file} setFile={setFile} />
          </FlexBox>

          <FlexBox className="w-full justify-center xl:justify-end">
            <Button className="medium-blue-gradient px-6 py-3 text-base 3xl:text-lg rounded-lg font-bold text-white hover:text-blue200 transition-all duration-700 ease-in-out leading-none">
              Submit Now
            </Button>
          </FlexBox>
        </Form>
      </FormProvider>
    </FlexBox>
  );
}
