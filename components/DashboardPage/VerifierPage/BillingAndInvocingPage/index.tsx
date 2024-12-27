"use client";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import { useState } from "react";

import Button from "@/components/Common/Button";
import CustomSelectIcon from "@/components/Common/CustomSelectIcon";
import FlexBox from "@/components/Common/FlexBox";
import { billingAndInvocingTabData } from "@/constant/dashboardPage";

import BillingAndInvocingTable from "./BillingAndInvocingTable";

interface TabProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

const Tab = ({ activeTab, setActiveTab }: TabProps) => {
  return (
    <FlexBox className="hidden xl:flex min-w-[250px] 2xl:min-w-[300px] w-1/4 py-5 md:py-10 items-start flex-col gap-2 me-4">
      {billingAndInvocingTabData.map(({ title, subTitle }, i) => (
        <Button
          key={i}
          className={clsx(
            "min-w-[250px] 2xl:min-w-[300px] flex-col py-6 normal-case",
            activeTab === i
              ? "rounded-xl bg-light500 text-blue200"
              : "text-blue400 border-b border-solid border-blue400 rounded-t-xl rounded-b-none",
          )}
          onClick={() => setActiveTab(i)}
        >
          <Typography className="text-center text-base 2xl:text-xl font-bold">
            {title}
          </Typography>
          <Typography className="text-center text-sm 2xl:text-base">
            {subTitle}
          </Typography>
        </Button>
      ))}
    </FlexBox>
  );
};

export default function BillingAndInvocing() {
  const [activeTab, setActiveTab] = useState(0);
  const [filter, setFilter] = useState("Credit System Interface");
  const [selectOpen, setSelectOpen] = useState(false);

  return (
    <FlexBox className="bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 w-full rounded-2xl border border-slate-200 shadow-card overflow-x-hidden">
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />

      <FlexBox className="flex-col items-center 2xl:items-start w-full xl:w-3/4 rounded-l-2xl border-l-0 xl:border-l border-slate-200 py-5 md:py-10 px-0 xl:px-8">
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value as string)}
          onOpen={() => setSelectOpen(true)}
          onClose={() => setSelectOpen(false)}
          IconComponent={(props) => (
            <CustomSelectIcon open={selectOpen} {...props} />
          )}
          renderValue={() => (
            <FlexBox className="gap-2 items-center">
              <Typography className="">{filter}</Typography>
            </FlexBox>
          )}
          className="flex xl:hidden w-4/5 text-neutral-700 px-3 2xl:px-4 text-lg rounded-lg border-none mb-4"
        >
          <MenuItem value="Credit System Interface">
            Credit System Interface
          </MenuItem>
          <MenuItem value="Invoice Management">Invoice Management</MenuItem>
          <MenuItem value="Payment Method Management">
            Payment Method Management
          </MenuItem>
          <MenuItem value="Usage Analytics">Usage Analytics</MenuItem>
        </Select>

        <Typography className="w-full text-center 2xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
          Credit System Interface
        </Typography>

        <Typography className="text-xl text-blue200 text-center 2xl:text-start">
          (for smaller clients)
        </Typography>

        <FlexBox className="w-1/2 min-w-[280px] sm:min-w-[380px] md:min-w-[450px] my-8 px-8 py-6 flex-col items-center 2xl:items-start border-2 border-neutral-300 rounded-xl">
          <Typography className="text-neutral-700 text-2xl font-aeonik-bold text-center md:text-start">
            Current Credit
          </Typography>
          <Typography className="text-neutral-700 text-base text-center md:text-start my-2">
            Curabitur hendrerit dui scelerisque laoreet dictum.
          </Typography>

          <Typography className="text-blue200 text-6xl md:text-7xl font-aeonik-bold text-center md:text-start my-6">
            <span className="text-blue400">$45.</span>78
          </Typography>

          <Button className="medium-blue-gradient px-6 py-3 text-base 3xl:text-lg rounded-lg font-bold text-white hover:text-blue200 transition-all duration-700 ease-in-out leading-none">
            Add a Credit
          </Button>
        </FlexBox>

        <Typography className="w-full text-center 2xl:text-start text-2xl font-aeonik-bold text-blue400 my-6">
          Billing History
        </Typography>

        <FlexBox className="w-full px-2 pe-2 xl:pe-16 2xl:pe-12 3xl:pe-2">
          <BillingAndInvocingTable />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
