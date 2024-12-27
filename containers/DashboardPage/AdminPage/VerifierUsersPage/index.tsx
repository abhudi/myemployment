"use client";
import FlexBox from "@/components/Common/FlexBox";
import VerifierUsers from "@/components/DashboardPage/AdminPage/VerifierUsersPage";

export default function VerifierUsersPage() {
  return (
    <>
      <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 max-w-desktop flex-col gap-6 4xl:gap-12">
        <VerifierUsers/>
      </FlexBox>
    </>
  );
}
