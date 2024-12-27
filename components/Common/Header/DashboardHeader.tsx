"use client";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AccountPopover from "../AccountPopover";
import FlexBox from "../FlexBox";
import Sidebar from "../Sidebar";
import { useOrganizationTypeAheadList } from "@/api/requests/header/typeAheadOrganizations";
import { sessionStorageUtil } from "@/utils/sessionStorageUtil";
import { StorageKeys } from "@/enums/StorageKeys";

// dummy fields are added FYI check it and delete it with comment.
const typeAheadOrganizations : TypeAheadOrganizationValues[] = [];

export function DashboardHeader() {
  const [open, setOpen] = useState(false);
  const [selectedLabelValue, setSelectedLabelValue] = useState("");
  const [selectedKeyValue, setSelectedKeyValue] = useState("");
  const [typeAheadOrganizationList, setTypeAheadOrganizations] = useState<TypeAheadOrganizationValues[]>([]);
  const [options, setOptions] = useState<TypeAheadOrganizationValues[]>([]);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleInputChange = (event:any, value:any) => {
      if (value.length >= 3) {
        // Perform search and update options
        const searchResults = performSearch(value); // Replace with your search logic
        setOptions(searchResults);
      } else {
        setSelectedKeyValue("");
        sessionStorageUtil.removeItem(StorageKeys.typeAheadOrganizationKeyValue);
        setSelectedLabelValue(""); // Update only if the value changes
        sessionStorageUtil.removeItem(StorageKeys.typeAheadOrganizationLabelValue);
        window.dispatchEvent(new Event('storage')); // Trigger storage event to notify other components
        setOptions([]);
      }
  };

  const performSearch = (query: string): TypeAheadOrganizationValues[] => {
    // Replace with your search logic
    // Example: return a list of matching options
    return typeAheadOrganizationList.filter(option =>
      option.organizationNameTypeInfo!.toLowerCase().includes(query.toLowerCase())
    );
  };

  
  const handleChange = (event :any, newValue:any) => {
    debugger;
    if (newValue?.key !== selectedKeyValue)
    {
      setSelectedKeyValue(newValue?.key || "");
      sessionStorageUtil.setItem(StorageKeys.typeAheadOrganizationKeyValue, newValue?.key ?? "");
    }
    if (newValue.label !== selectedLabelValue) {
      setSelectedLabelValue(newValue?.label ?? ""); // Update only if the value changes
      sessionStorageUtil.setItem(StorageKeys.typeAheadOrganizationLabelValue, newValue?.label ?? "");
    }

    if (newValue?.key === null)
    {
      setSelectedKeyValue("");
      sessionStorageUtil.removeItem(StorageKeys.typeAheadOrganizationKeyValue);
    }
    if (newValue.label === null) {
      setSelectedLabelValue(""); // Update only if the value changes
      sessionStorageUtil.removeItem(StorageKeys.typeAheadOrganizationLabelValue);
    }
    window.dispatchEvent(new Event('storage')); // Trigger storage event to notify other components
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const { mutateAsync:getTypeAheadOrganizationList , isPending: isLoading } =   useOrganizationTypeAheadList();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTypeAheadOrganizationList();
        if (response?.data) {
          setTypeAheadOrganizations(response.data);
          const storedValue = sessionStorageUtil.getItem(StorageKeys.typeAheadOrganizationLabelValue);
          if (storedValue) {
            const prePopulateSearchResult =  response.data.filter(option =>
              option.organizationNameTypeInfo!.toLowerCase().includes(storedValue.toString().toLowerCase())
            );
            setOptions(prePopulateSearchResult);
            window.dispatchEvent(new Event('storage'));
          }
        }     
       } catch (error) {
        toast.error("Failed to fetch organizations");
      }
    };
  
    fetchData();
    const storedValue = sessionStorageUtil.getItem(StorageKeys.typeAheadOrganizationLabelValue);
    if (storedValue) {
      setSelectedLabelValue(storedValue as string);
    }
    const storedKeyValue = sessionStorageUtil.getItem(StorageKeys.typeAheadOrganizationKeyValue);
    if (storedKeyValue) {
      setSelectedKeyValue(storedKeyValue as string);
    }
  
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <FlexBox
      className={`w-full px-4 md:px-10 py-3 shadow-header sticky top-0 z-20 transition-all duration-300 backdrop-blur-3xl ${
        isScrolled
          ? "bg-white/5 border-none"
          : "bg-white/50 border-b-2 border-b-slate-200"
      }`}
    >
      <img
        draggable="false"
        src="/assets/img/dashboard/header/shadow1.png"
        alt=""
        className="w-1/2 md:w-auto absolute top-0 left-0 -translate-x-1/2 z-10"
      />
      <img
        draggable="false"
        src="/assets/img/dashboard/header/shadow2.png"
        alt=""
        className="w-1/2 md:w-auto absolute top-0 left-1/4"
      />
      <FlexBox className="w-full justify-between items-center mx-auto z-20">
        <FlexBox className="w-auto sm:w-2/3 md:w-2/5 items-center gap-2">
          <IconButton onClick={handleOpen} className="block md:hidden">
            <MenuOpenIcon className="text-blue400 text-3xl" />
          </IconButton>

          {/* <InputBase
            placeholder="Find Something.."
            startAdornment={
              <IconButton className="w-10 h-10 mx-1 md:mx-2">
                <SearchIcon className="text-blue150 text-3xl" />
              </IconButton>
            }
            className="hidden sm:flex border border-neutral-300 text-black font-aeonik bg-white rounded-lg p-1 w-full"
          /> */}

          <Stack spacing={2} sx={{ width: 600 }}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              value={selectedLabelValue}
              onChange={handleChange} // Handle option selection
              onInputChange={handleInputChange} // Handle input changes
              options={options.map((option, index) => ({
                label: option.organizationNameTypeInfo || "",
                key: option.organizationIdInfo || index, // Ensure unique key
              }))}            
              style={{ position: "relative" }}
              renderInput={(params) => (
                <>
                  <IconButton
                    className="w-10 h-10 mx-1 md:mx-2 absolute left-0"
                    style={{
                      top: "10px",
                      zIndex: 2,
                    }}
                  >
                    <SearchIcon className="text-blue150 text-3xl" />
                  </IconButton>
                  <TextField
                    {...params}
                    placeholder="Search Organization"
                    className="hidden sm:flex border border-neutral-300 text-black font-aeonik bg-white rounded-lg w-full"
                    slotProps={{
                      input: {
                        ...params.InputProps,
                        type: "search",
                        className: "pl-10",
                      },
                    }}
                  />
                </>
              )}
            />
          </Stack>
        </FlexBox>

        <FlexBox className="items-center gap-2 md:gap-4">
          <AccountPopover />
          <IconButton className="bg-white shadow-button">
            <NotificationsIcon className="text-amber-400 text-2xl" />
          </IconButton>
        </FlexBox>
      </FlexBox>

      <Drawer open={open} onClose={handleClose}>
        <Sidebar open={true} />
      </Drawer>
    </FlexBox>
  );
}
