import FlexBox from "@/components/Common/FlexBox";
import ApiAccessManagement from "@/components/DashboardPage/VerifierPage/ManagementPage/ApiAccessManagement";
import OrganizationProfile from "@/components/DashboardPage/VerifierPage/ManagementPage/OrganizationProfile";
import UserManagement from "@/components/DashboardPage/VerifierPage/ManagementPage/UserManagement";

export default function ManagementPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 max-w-desktop flex-col items-stretch gap-6 4xl:gap-12">
      <FlexBox className="w-full flex-col 2xl:flex-row justify-between items-stretch gap-6 4xl:gap-12">
        <OrganizationProfile />
        <UserManagement />
      </FlexBox>

      <ApiAccessManagement />
    </FlexBox>
  );
}
