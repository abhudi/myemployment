// FormComponent.jsx
"use client";
import { Controller, FormProvider } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Autocomplete, FormLabel, IconButton, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import clsx from "clsx";
import FormControl from "@/components/Common/FormControl";
import FlexBox from "@/components/Common/FlexBox";
import Form from "@/components/Common/Form";
import moment, { Moment } from "moment";
import { OrganizationProfileFormValues } from "@/api/types";
import Box from "@mui/material/Box";
import Button from "@/components/Common/Button";
import MUIFormControl from "@mui/material/FormControl";
import { SyntheticEvent, useState } from "react";
import { Country,State } from "country-state-city";
import { MuiTelInput } from "mui-tel-input";
import MuiFormControl from "@mui/material/FormControl";

type ICountry = {
  label: string;
  code: string;
};

type IState = {
  label: string;
  code: string;
};


export default function OrganizationProfileForm({
  form,
  editableFields,
  toggleEditable,
  handleSubmit,
}: any) {

  const isOptionEqualToValue = (
    option: ICountry | IState,
    value: ICountry | IState,
  ) => {
    return option.code === value.code;
  };

  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>({
    label: "United States",
    code: "US",
  });
  const [selectedState, setSelectedState] = useState<IState | null>(null);

  const countries: ICountry[] = Country.getAllCountries().map((country) => ({
    label: country.name,
    code: country.isoCode,
  }));

  const states: IState[] = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.code).map((state) => ({
        label: state.name,
        code: state.isoCode,
      }))
    : [];

  const handleCountryChange = (
    event: SyntheticEvent,
    value: ICountry | null,
  ) => {
    setSelectedCountry(value);
    setSelectedState(null);
    form.setValue("country", value?.label || "");
  };

  const handleStateChange = (event: SyntheticEvent, value: IState | null) => {
    setSelectedState(value);
    form.setValue("state", value?.label || "");
  };

  return (
    <h1>Organization Form</h1>
  );
}
