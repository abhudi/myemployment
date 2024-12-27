"use client";

import Box from "@mui/material/Box";
import React, { PropsWithChildren, useEffect, useState } from "react";

import FlexBox from "@/components/Common/FlexBox";
import { DashboardHeader } from "@/components/Common/Header";
import Sidebar from "@/components/Common/Sidebar";
import {
  useAuthGuard,
  useOnboardingGuard,
  usePermissionGuard,
  useVerificationGuard,
} from "@/hooks";
import { sessionStorageUtil } from "@/utils/sessionStorageUtil";
import { StorageKeys } from "@/enums/StorageKeys";
import { uniqueId } from "lodash";

export default function DashboardLayout({ children }: PropsWithChildren) {
  usePermissionGuard();
  useAuthGuard(false, "/auth/login");
  useOnboardingGuard(false, "/auth/onboarding/consumer-info");
  useVerificationGuard(true, false, "/auth/onboarding/contact-verification");

  const [selectValue, setSelectValue] = useState<boolean>(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setSelectValue(false);
      if(sessionStorageUtil.getItem(StorageKeys.typeAheadOrganizationKeyValue) !== null &&
      sessionStorageUtil.getItem(StorageKeys.typeAheadOrganizationKeyValue) !== undefined &&
      sessionStorageUtil.getItem(StorageKeys.typeAheadOrganizationKeyValue) !== ''){
        setTimeout(() => {
          setSelectValue(true);
        }, 100);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  return (
      <FlexBox className="bg-gray150 h-screen">
        <Sidebar />

        <FlexBox className="w-full justify-end dashboard">
          <FlexBox className="w-full relative flex-col justify-start items-center md:w-[calc(100vw-85px)] lg:w-[calc(100vw-300px)]">
            <DashboardHeader />

            <Box className="w-full h-[calc(100vh-54px)] 4xl:h-[calc(100vh-94px)] overflow-y-auto">
            {selectValue === true && children}
            {(selectValue === false) &&   <FlexBox className="w-full h-full justify-center items-center">
              <div className="select-organization-text">Please search organization</div>
              </FlexBox>}
            </Box>
          </FlexBox>
        </FlexBox>
      </FlexBox>
  );
}
