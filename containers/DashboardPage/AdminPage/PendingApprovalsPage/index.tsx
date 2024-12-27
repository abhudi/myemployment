"use client";
import FlexBox from "@/components/Common/FlexBox";
import PendingApprovals from "@/components/DashboardPage/AdminPage/PendingApprovalsPage";

export default function PendingApprovalsPage() {
  return (
    <>
      <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 max-w-desktop flex-col gap-6 4xl:gap-12">
        <PendingApprovals />
      </FlexBox>
    </>
  );
}
