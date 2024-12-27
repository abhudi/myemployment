"use client";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import Joi from "joi";
import { SyntheticEvent, useEffect, useState } from "react";
import { Controller, FormProvider } from "react-hook-form";

import Button from "@/components/Common/Button";
import CustomCheckBox from "@/components/Common/CustomCheckBox";
import FlexBox from "@/components/Common/FlexBox";
import Form from "@/components/Common/Form";
import FormControl from "@/components/Common/FormControl";
import { useSchemaForm } from "@/hooks";
import { ComplianceForm } from "@/types";
// import CustomCKEditor from "@/components/Common/CustomCKEditor";
import CustomQuillEditor from "@/components/Common/CustomQuillEditor";
import { Autocomplete, TextField } from "@mui/material";
import { State } from "country-state-city";
import toast from "react-hot-toast";
import Message from "@/enums/Message";
import SwitchButtonWithLabel from "@/components/Common/SwitchButtonWithLabel";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import LoadingButton from "@/components/Common/LoadingButton";
import { ComplianceGetStates } from "@/api/requests/dashboard/complianceGetStates";
import { useifGlobal } from "@/api/requests/dashboard/ifGlobal";
import { useglobalSave } from "@/api/requests/dashboard/globalSave";
import { uselocalSaves } from "@/api/requests/dashboard/localSave";
import { sessionStorageUtil } from "@/utils/sessionStorageUtil";

const defaultValues = {
  introductionLetter: "",
  employerLevelDisclaimer: "",
  stateNoticeToConsumers: [{ state: null as IState | null, notice: "" }],
  summaryOfRights: "",
};

type IState = {
  label: string;
  code: string;
  id: number;
};

const isOptionEqualToValue = (option: IState, value: IState) => {
  return option.code === value.code;
};

function joiMessages() {
  return {
    "string.empty": "is required",
  };
}

const schema = Joi.object({
  introductionLetter: Joi.string().required(),
  employerLevelDisclaimer: Joi.string().required(),
  summaryOfRights: Joi.string().required(),
  stateNoticeToConsumers: Joi.array()
    .items(
      Joi.object({
        state: Joi.object({
          label: Joi.string().required(),
          code: Joi.string().required(),
        }).required(),
        notice: Joi.string().required(),
      }),
    )
    .required(),
}).messages(joiMessages());

export default function Compliance() {
  const { mutate, data, error } = ComplianceGetStates();
  // const { mutate, data, error } = useifGlobal();
  // States
  const [editorContent, setEditorContent] = useState("");
  const [previewContent, setPreviewContent] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [previewSummary, setPreviewSummary] = useState("");
  const [selectedStates, setSelectedStates] = useState<IState[]>([]);
  const [showStateNoticePreview, setShowStateNoticePreview] = useState(false);
  const [previewStateNotice, setStateNotice] = useState("");
  // const [activeOption, setActiveOption] = useState<"global" | "client">("global");
  const { mutate: saveGlobal } = useglobalSave();
  const { mutate: saveLocal } = uselocalSaves();

  // const organizationId=sessionStorageUtil.getOrganizationId()
  // UseEffect Call
  useEffect(() => {
    mutate();
  }, [mutate]);

  const form = useSchemaForm({
    mode: "onSubmit",
    defaultValues,
    schema,
  });

  const [activeOption, setActiveOption] = useState<"global" | "client">(
    "client",
  );
  const handleToggleGlobal = (newState: boolean) => {
    setActiveOption(newState ? "client" : "global");
    setEditable(newState);

    if (newState) {
      // If switched to "Global"
      const payload = {
        organizationId: sessionStorageUtil.getOrganizationId(),
        isGlobalCompliance: true,
      };

      toggleGlobalCompliance(payload, {
        onSuccess: () => {
          toast.success("Successfully updated to Global Compliance.");
        },
        onError: () => {
          toast.error("Failed to update Global Compliance.");
        },
      });
    }
  };

  const [editable, setEditable] = useState(false);

  const { watch, setValue } = form;

  const rows = watch("stateNoticeToConsumers");

  const defaultCountryCode = "US";
  const states: IState[] =
    data && data.data
      ? data.data.map((state: any) => ({
          label: state.name,
          code: state.isoCode,
          id: state.id,
        }))
      : [];
  // console.log('81',organizationId)
  const handleStateChange = (
    index: number,
    event: SyntheticEvent,
    value: IState | null,
  ) => {
    if (value) {
      // Add selected state to selectedStates
      setSelectedStates((prevState) => [...prevState, value]);

      const updatedRows = [...rows];
      updatedRows[index].state = value;
      setValue("stateNoticeToConsumers", updatedRows);
    }
  };
  const { mutate: toggleGlobalCompliance } = useifGlobal(); // Destructure mutate function from useifGlobal
  // const { mutate: toggleGlobalCompliance } = useglobalSave();

  const handleNoticeChange = (index: number, data: string) => {
    const updatedRows = [...rows];
    updatedRows[index].notice = data;
    setValue("stateNoticeToConsumers", updatedRows);
  };

  const handleAddRow = () => {
    const updatedRows = [...rows, { state: null, notice: "" }];
    setValue("stateNoticeToConsumers", updatedRows);
  };

  const handleRemoveRow = (stateToRemove: IState, index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setValue("stateNoticeToConsumers", updatedRows);
    setSelectedStates((prevState) =>
      prevState.filter((state) => state.label !== stateToRemove.label),
    );
  };
  // Filter available states to exclude selected ones
  const availableStates = states.filter(
    (state) =>
      !selectedStates.some((selected) => selected.label === state.label),
  );
  console.log("172", states);
  const handleStateNoticePreviewClick = () => {
    setShowStateNoticePreview(true);
    const textContent =
      new DOMParser().parseFromString(editorContent, "text/html").body
        .textContent || "";
    setStateNotice(textContent);
  };

  // Handle Save logic based on activeOption
  const handleSave = (e: SyntheticEvent) => {
    e.preventDefault();
    const payload = preparePayload();

    if (activeOption === "global") {
      saveGlobal(payload, {
        onSuccess: () => {
          toast.success("Saved successfully for Global.");
        },
        onError: () => {
          toast.error("Failed to save for Global.");
        },
      });
    } else {
      saveLocal(payload, {
        onSuccess: () => {
          toast.success("Saved successfully for Client.");
        },
        onError: () => {
          toast.error("Failed to save for Client.");
        },
      });
    }
  };

  // handle content change from CKEditor

  const handleContentChange = (newContent: any) => {
    setEditorContent(newContent);
  };

  // Prepare data payload for API call
  const preparePayload = () => {
    const stateNoticeToConsumerList = rows.map((row) => ({
      stateId: row.state?.id || null, // Ensure state ID is captured
      description: row.notice || "",
    }));

    return {
      id: sessionStorageUtil.getOrganizationId(), // Replace with actual ID if needed
      introductionLetter: form.getValues("introductionLetter"),
      employerLevelDisclaimer: form.getValues("employerLevelDisclaimer"),
      summaryOfRights: form.getValues("summaryOfRights"),
      organizationId: sessionStorageUtil.getOrganizationId(),
      stateNoticeToConsumerList,
    };
  };

  const handlePreviewClick = () => {
    const textContent =
      new DOMParser().parseFromString(editorContent, "text/html").body
        .textContent || "";
    setPreviewContent(textContent);
  };
  const getTextContent = (htmlContent: string) => {
    const textContent =
      new DOMParser().parseFromString(htmlContent, "text/html").body
        .textContent || "";
    return textContent;
  };
  const handlepreviewSummary = () => {
    const textContent =
      new DOMParser().parseFromString(editorContent, "text/html").body
        .textContent || "";
    setPreviewSummary(textContent);
  };

  return (
    <FlexBox className="w-full flex-col gap-6">
      <FlexBox className="w-full my-4 flex-col md:flex-row justify-center 2xl:justify-end items-center 2xl:items-start gap-6">
        {/* <SwitchButtonWithLabel
          checked={activeOption === "client"}
          setChecked={(newState) => {
            setActiveOption(newState ? "client" : "global");
            setEditable(newState);
          }}
          labelStyle="violet-switch-label"
          xBase="76px"
          xBaseUpdate="150px"
          labelFirst="Global"
          labelSecond="Client"
        /> */}
        <SwitchButtonWithLabel
          checked={activeOption === "client"}
          setChecked={(newState) => {
            if (typeof newState === "boolean") {
              handleToggleGlobal(newState);
            }
          }}
          labelStyle="violet-switch-label"
          xBase="76px"
          xBaseUpdate="150px"
          labelFirst="Global"
          labelSecond="Client"
        />
      </FlexBox>

      <FlexBox
        className={clsx(
          activeOption === "global" ? "opacity-50" : "opacity-100",
          "flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card",
        )}
      >
        <Typography className="text-center 2xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
          Terms and Conditions
        </Typography>

        <FlexBox className="w-full flex-col items-center md:items-start gap-6">
          <FlexBox className="w-full flex-col">
            <Typography className="text-blue400 text-xl font-aeonik-bold my-4 text-center md:text-start">
              Latest platform terms and FCRA requirements
            </Typography>
            <Typography className="text-neutral-700 text-sm md:text-base text-start">
              Donec mollis vehicula nulla eu porta. Vestibulum volutpat
              easeleifend sapien, eget ultricies lacus scelerisque non.
              Curabitur dapibus nunc in diam tincidunt, id semper magna
              vulputate. Cras non porttitor turpis. Morbi convallis mauris
              gravida, gravida lacus at, iaculis metus. Morbi at tortor luctus,
              hendrerit nisi sed,
            </Typography>
          </FlexBox>

          <FlexBox className="w-full flex-col">
            <Typography className="text-blue400 text-xl font-aeonik-bold my-4 text-center md:text-start">
              FCRA requirements
            </Typography>
            <Typography className="text-neutral-700 text-sm md:text-base text-start">
              Donec mollis vehicula nulla eu porta. Vestibulum volutpat
              easeleifend sapien, eget ultricies lacus scelerisque non.
              Curabitur dapibus nunc in diam tincidunt, id semper magna
              vulputate. Cras non porttitor turpis.
            </Typography>
          </FlexBox>

          <FlexBox className="w-full flex-col">
            <Typography className="text-blue400 text-xl font-aeonik-bold my-4 text-center md:text-start">
              Electronic Acknowledgment
            </Typography>
            <FlexBox className="w-full gap-2 items-center">
              <CustomCheckBox />
              <Typography className="text-neutral-700 text-sm md:text-base text-start">
                Donec mollis vehicula nulla eu porta. Vestibulum volutpat
                easeleifend sapien, eget ultricies lacus scelerisque non.
              </Typography>
            </FlexBox>
          </FlexBox>

          <FlexBox>
            {previewContent && (
              <FlexBox className="w-full flex-col">
                <Typography className="text-blue400 text-xl font-aeonik-bold my-4 text-center md:text-start">
                  Introduction Letter
                </Typography>
                <FlexBox className="w-full gap-2 items-center">
                  <Typography className="text-neutral-700 text-sm md:text-base text-start">
                    {previewContent}
                  </Typography>
                </FlexBox>
              </FlexBox>
            )}
          </FlexBox>

          <FlexBox>
            {showPreview && editorContent && (
              <div className="mt-4">
                <Typography className="text-blue400 text-xl font-aeonik-bold my-4 text-center md:text-start">
                  Employer Level Disclaimer Preview
                </Typography>
                <FlexBox className="w-full gap-2 items-center">
                  <Typography className="text-neutral-700 text-sm md:text-base text-start">
                    {getTextContent(editorContent)}
                  </Typography>
                </FlexBox>
              </div>
            )}
          </FlexBox>

          <FlexBox>
            {previewSummary && (
              <FlexBox className="w-full flex-col">
                <Typography className="text-blue400 text-xl font-aeonik-bold my-4 text-center md:text-start">
                  Summary Of Rights
                </Typography>
                <FlexBox className="w-full gap-2 items-center">
                  <Typography className="text-neutral-700 text-sm md:text-base text-start">
                    {previewSummary}
                  </Typography>
                </FlexBox>
              </FlexBox>
            )}
          </FlexBox>

          <FlexBox>
            {showStateNoticePreview && rows.length > 0 && (
              <FlexBox className="w-full flex-col">
                <Typography className="text-blue400 text-xl font-aeonik-bold my-4 text-center md:text-start">
                  State Notice To Consumers Preview
                </Typography>
                {rows.map((row, index) => (
                  <FlexBox className="w-full gap-2 items-center" key={index}>
                    <Typography className="text-neutral-700 text-sm md:text-base text-start">
                      {/* Render selected state and notice */}
                      {row.state
                        ? `${row.state.label}: ${previewStateNotice}`
                        : `State ${index + 1}: ${previewStateNotice}`}
                    </Typography>
                    {/* Button to remove row */}
                    {/* <IconButton onClick={() => handleRemoveRow(row.state, index)}>
                <RemoveCircleOutlineIcon />
              </IconButton> */}
                  </FlexBox>
                ))}
              </FlexBox>
            )}
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FormProvider {...form}>
        <Form
          className="w-full flex flex-col mt-4 pb-10 md:pb-20 border-b-2 border-gray-200"
          onSubmit={handleSave}
          noValidate
        >
          <FlexBox className="w-full flex-col md:flex-row gap-6 mb-3">
            <Controller<ComplianceForm, "introductionLetter">
              name="introductionLetter"
              render={({ field, fieldState }) => (
                <div className="mb-2 sm:mb-4 w-full">
                  <label className="text-base font-aeonik mb-1 block text-gray-700">
                    Introduction Letter {fieldState.error?.message || ""}
                  </label>
                  <div className="mt-1">
                    <CustomQuillEditor
                      value={editorContent}
                      onChange={handleContentChange}
                    />
                    <div className="mt-2">
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={handlePreviewClick}
                      >
                        Preview
                      </Button>
                    </div>
                  </div>
                  {fieldState.error && (
                    <p className="text-red-500 text-sm mt-1">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              )}
            />
          </FlexBox>

          <FlexBox className="w-full flex-col md:flex-row mb-3">
            <Controller<ComplianceForm, "employerLevelDisclaimer">
              name="employerLevelDisclaimer"
              render={({ field, fieldState }) => (
                <div className="mb-2 sm:mb-4 w-full">
                  <label className="text-base font-aeonik mb-1 block text-gray-700">
                    Employer Level Disclaimer {fieldState.error?.message || ""}
                  </label>
                  <div className="mt-1">
                    <CustomQuillEditor
                      value={editorContent}
                      onChange={handleContentChange}
                    />
                    <div className="mt-2">
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => setShowPreview(true)}
                      >
                        Preview
                      </Button>
                    </div>
                  </div>
                  {fieldState.error && (
                    <p className="text-red-500 text-sm mt-1">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              )}
            />
          </FlexBox>

          <FlexBox className="w-full flex-col md:flex-row gap-6 mb-3">
            <Controller<ComplianceForm, "summaryOfRights">
              name="summaryOfRights"
              render={({ field, fieldState }) => (
                <div className="mb-2 sm:mb-4 w-full">
                  <label className="text-base font-aeonik mb-1 block text-gray-700">
                    Summary Of Rights {fieldState.error?.message || ""}
                  </label>
                  <div className="mt-1">
                    <CustomQuillEditor
                      value={editorContent}
                      onChange={handleContentChange}
                    />
                    <div className="mt-2">
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={handlepreviewSummary}
                      >
                        Preview
                      </Button>
                    </div>
                  </div>
                  {fieldState.error && (
                    <p className="text-red-500 text-sm mt-1">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              )}
            />
          </FlexBox>

          <FlexBox className="w-full flex-col">
            <label className="text-base font-aeonik py-1 text-gray-700">
              State Notice To Consumers
            </label>

            {rows.map((row, index) => (
              <FlexBox
                key={index}
                className="w-full flex-col gap-4 md:flex-row items-start"
              >
                {/* State Dropdown */}
                <div className="w-full md:w-1/3">
                  <Controller
                    name={`stateNoticeToConsumers[${index}].state`}
                    render={({ field, fieldState }) => (
                      <div className="mb-2 sm:mb-4 w-full bg-white">
                        <Autocomplete
                          {...field}
                          value={row.state}
                          options={availableStates} // Filtered states
                          getOptionLabel={(option) => option.label}
                          isOptionEqualToValue={isOptionEqualToValue}
                          onChange={(event, value) =>
                            handleStateChange(index, event, value)
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              label="Select State"
                            />
                          )}
                        />
                        {fieldState.error && (
                          <p className="text-red-500 text-sm mt-1">
                            {fieldState.error.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>

                {/* QuillEditor */}
                <div className="w-full md:w-2/3">
                  <Controller
                    name={`stateNoticeToConsumers[${index}].notice`}
                    render={({ field, fieldState }) => (
                      <div className="mb-2 sm:mb-4 w-full">
                        <CustomQuillEditor
                          value={editorContent}
                          onChange={handleContentChange}
                        />
                        {fieldState.error && (
                          <p className="text-red-500 text-sm mt-1">
                            {fieldState.error.message}
                          </p>
                        )}
                        <div className="mt-2">
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={handleStateNoticePreviewClick}
                          >
                            Preview
                          </Button>
                        </div>
                      </div>
                    )}
                  />
                </div>

                {/* Add/Remove Buttons */}
                <div className="flex items-center gap-2">
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={handleAddRow}
                    className="text-blue-600"
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                  {rows.length > 1 && (
                    <IconButton
                      aria-label="delete"
                      size="small"
                      // onClick={() => handleRemoveRow(row.state)}
                      onClick={() =>
                        row.state && handleRemoveRow(row.state, index)
                      }
                      color="error"
                      className="text-red-600"
                    >
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                  )}
                </div>
              </FlexBox>
            ))}
          </FlexBox>
          <FlexBox className="w-full border-t border-slate-200 my-6">
            <FlexBox className="w-1/4 flex-col mt-6">
              <LoadingButton
                fullWidth
                variant="contained"
                className="rounded-3xl py-2 sm:py-3 font-aeonik-bold text-base md:text-xl"
                type="submit"
              >
                Save
              </LoadingButton>
            </FlexBox>
          </FlexBox>
        </Form>
      </FormProvider>
    </FlexBox>
  );
}
