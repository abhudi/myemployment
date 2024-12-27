"use client";

import { useState } from "react";

import FlexBox from "@/components/Common/FlexBox";
import BulkFileUpload from "@/components/DashboardPage/DataContributorPage/DataSubmissionPage/BulkFileUpload";
import SubmissionManagement from "@/components/DashboardPage/DataContributorPage/DataSubmissionPage/SubmissionManagement";
import SubmissionSetup from "@/components/DashboardPage/DataContributorPage/DataSubmissionPage/SubmissionSetup";
import ValidationSummary from "@/components/DashboardPage/DataContributorPage/DataSubmissionPage/ValidationSummary";
import ApiManagement from "@/components/DashboardPage/DataContributorPage/IntegrationsPage/ApiManagement";

export default function DatSubmissionPage() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 flex-col max-w-desktop gap-6 4xl:gap-12">
      <FlexBox
        className={`w-full flex-col xl:flex-row justify-between ${files.length > 0 ? "items-start" : "items-stretch"} gap-6 4xl:gap-12`}
      >
        <BulkFileUpload files={files} setFiles={setFiles} />
        <ApiManagement />
      </FlexBox>

      <SubmissionManagement />
      {/* <FlexBox className="w-full flex-col xl:flex-row justify-between items-stretch gap-6 4xl:gap-12">
        <ValidationSummary />
        <SubmissionSetup />
      </FlexBox> */}
    </FlexBox>
  );
}
