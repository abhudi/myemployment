"use client";

import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import FlexBox from "@/components/Common/FlexBox";
import { ClearIcon } from "@mui/x-date-pickers";
import DataContributorUsersTable from "./DataContributorUsersTable";

export default function DataContributorUsers() {
  const [searchValue, setSearchValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    setSearchQuery(searchValue);
  };

  const handleClearClick = () => {
    setSearchValue('');
    setSearchQuery('');
  };

  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full justify-between items-center md:items-start flex-col">
        <Typography className="flex items-center text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-2 md:mb-6">
      Data Contributor Users
        </Typography>

        <FlexBox className="w-full mb-6 items-center justify-between flex-col xl:flex-row gap-4">
          <FlexBox className="w-full items-center justify-end gap-4">
           

            <FlexBox className="w-full xl:w-2/5">
              <InputBase
                placeholder="Search all data contributor user..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                endAdornment={
                  <>
                  <IconButton className="w-10 h-10 mx-1 md:mx-2" onClick={handleSearchClick}>
                      <SearchIcon className="text-blue400 text-3xl" />
                    </IconButton>
                    {searchValue && (
                      <IconButton className="w-10 h-10 mx-1 md:mx-2" onClick={handleClearClick}>
                        <ClearIcon className="text-blue400 text-3xl" />
                      </IconButton>
                    )}
                  </>
                }
                className="ps-4 w-full border border-neutral-300 text-black font-aeonik bg-white rounded-lg p-1.5"
              />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <DataContributorUsersTable searchQuery={searchQuery} />
    </FlexBox>
  );
}
