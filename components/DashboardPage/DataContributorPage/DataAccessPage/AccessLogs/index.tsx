"use client";

import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import { Theme, useMediaQuery } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import Button from "@/components/Common/Button";
import CustomSelectIcon from "@/components/Common/CustomSelectIcon";
import FlexBox from "@/components/Common/FlexBox";
import { accessLogsData } from "@/constant/dashboardPage";
import truncateText from "@/utils/truncateText";

const AccessLogsTable = () => {
  const isDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("desktop"),
  );

  const isMobileLg = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("moblg"),
  );

  return (
    <FlexBox
      className="flex-col my-2 max-h-[190px] overflow-y-auto gap-2"
      id="accessLog"
    >
      {accessLogsData.map(({ date, title }, i) => (
        <FlexBox
          key={i}
          className="cursor-pointer justify-between items-center rounded-xl me-2 sm:me-5 ps-2 sm:ps-5 pe-2 py-2 bg-light225 hover:bg-slate-100 transition-all duration-300 ease-in-out"
        >
          <FlexBox className="items-start sm:items-center gap-3 lg:gap-8">
            <Typography className="text-blue400 font-aeonik-bold text-base">
              {date}
            </Typography>
            <FlexBox className="gap-1 flex-col md:flex-row">
              <Typography className="text-neutral-700 text-base">
                {isDesktop ? truncateText(title, 15) : truncateText(title, 10)}
              </Typography>
            </FlexBox>
          </FlexBox>

          <Button className="text-white bg-blue150 font-bold px-5 py-2 rounded-lg">
            {isMobileLg ? "View Details" : <ContentPasteSearchIcon />}
          </Button>
        </FlexBox>
      ))}
    </FlexBox>
  );
};

export default function AccessLogs() {
  const [filter, setFilter] = useState("Latest First");
  const [selectFilterOpen, setSelectFilterOpen] = useState(false);
  const [sort, setSort] = useState("Data Types");
  const [selectSortOpen, setSelectSortOpen] = useState(false);

  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-auto 3xl:w-2/3 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center 3xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        Access Logs
      </Typography>

      <Typography className="text-center 3xl:text-start text-xl md:text-2xl font-aeonik-bold text-blue400 mt-4 mb-6">
        Recent on-demand data accesses
      </Typography>

      <FlexBox className="w-full items-center flex-col md:flex-row justify-center 3xl:justify-start gap-6 mb-6">
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value as string)}
          onOpen={() => setSelectFilterOpen(true)}
          onClose={() => setSelectFilterOpen(false)}
          IconComponent={(props) => (
            <CustomSelectIcon open={selectFilterOpen} {...props} />
          )}
          renderValue={() => (
            <FlexBox className="gap-2 items-center">
              <Typography className="">Sort by:</Typography>
              <Typography className="text-blue400 font-bold">
                {filter}
              </Typography>
            </FlexBox>
          )}
          className="w-11/12 sm:w-2/3 md:w-full xl:w-auto h-[52px] text-neutral-700 px-3 2xl:px-4 text-lg rounded-card border-none"
        >
          <MenuItem value="Latest First">Latest First</MenuItem>
          <MenuItem value="Latest End">Latest End</MenuItem>
        </Select>

        <Select
          value={sort}
          onChange={(e) => setSort(e.target.value as string)}
          onOpen={() => setSelectSortOpen(true)}
          onClose={() => setSelectSortOpen(false)}
          IconComponent={(props) => (
            <CustomSelectIcon open={selectSortOpen} {...props} />
          )}
          renderValue={() => (
            <FlexBox className="gap-2 items-center">
              <Typography className="">Filter by:</Typography>
              <Typography className="text-blue400 font-bold">{sort}</Typography>
            </FlexBox>
          )}
          className="w-11/12 sm:w-2/3 md:w-full xl:w-auto h-[52px] text-neutral-700 px-3 2xl:px-4 text-lg rounded-card border-none"
        >
          <MenuItem value="Data Types">Data Types</MenuItem>
        </Select>
      </FlexBox>

      <AccessLogsTable />
    </FlexBox>
  );
}
